<script lang="ts">
  import { beforeUpdate, getContext } from "svelte";

  import type Rating from "../types/Rating";
  import type RatedPerson from "../types/RatedPerson";
  import Card from "./Card.svelte";
  import RulerTitle from "./RulerTitle.svelte";
  import RatingBarChart from "./RatingBarChart.svelte";
  import ScoreHighlightBar from "./ScoreHighlightBar.svelte";
  import { fade } from "svelte/transition";

  export let scores: RatedPerson[] = [];
  export let linkedRatingName = "linked ratings";
  export let linkSymbol = "⚭";

  let displayScores = scores;

  let sortField: string | null = null;
  let showScoreHighlight = false;
  let showLinkedRatings = false;
  let nameFilter: string | null = null;
  let rulersGrid = null;

  const modal: any = getContext("simple-modal");

  beforeUpdate(() => {
    showScoreHighlight =
      sortField && sortField !== "index" && sortField !== "total";

    displayScores = scores;
    filterRatings();
    sortRatings();
  });

  const showCard = (rating: Rating) => {
    modal.open(
      Card,
      { rating },
      {
        styleWindow: {
          width: "fit-content",
          background: "rgba(0,0,0,0)",
        },
        styleContent: {
          padding: 0,
        },
      }
    );
  };

  const filterRatings = () => {
    if (!nameFilter) {
      displayScores = scores || [];
      return;
    }

    const lowerCaseFilter = nameFilter.toLocaleLowerCase();
    displayScores = scores.filter((score) =>
      score.name.join(" ").toLocaleLowerCase().includes(lowerCaseFilter)
    );
  };

  const sortRatings = () => {
    if (!sortField) {
      return;
    }
    displayScores = displayScores.sort((a, b) => {
      if (a[sortField] === b[sortField]) {
        return 0;
      } else {
        if (sortField === "index") {
          return a[sortField] > b[sortField] ? 1 : -1;
        }
        return a[sortField] > b[sortField] ? -1 : 1;
      }
    });
  };
</script>

<style>
  form {
    border-bottom: 1px solid darkslategray;
    padding: 0.5em;
    margin: 0 0 0.2em 0;
    display: flex;
    justify-content: start;
  }

  field {
    padding: 0 0.5em;
  }

  #name-filter {
    width: 100%;
    max-width: 10em;
  }

  ruler {
    display: contents;
  }

  ruler > * {
    background: inherit;
    height: 100%;
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 0.5em;
    box-sizing: border-box;
  }

  ruler:hover {
    background: rgba(0, 0, 0, 0.15);
  }

  ruler:nth-child(even) {
    background-color: rgba(0, 0, 0, 0.05);
  }

  ruler:nth-child(even):hover {
    background-color: rgba(0, 0, 0, 0.15);
  }

  linked-to {
    color: #b69119;
    font-size: 2rem;
    display: flex;
    padding-left: 1em;
  }

  linked-to > span {
    display: block;
    padding-bottom: 0.5rem;
  }

  linked-to > ruler-title {
    padding: 0 0.2em;
    width: 100%;
  }

  rulers {
    display: grid;
    align-items: center;
    justify-content: left;
  }

  ruler-title {
    grid-column-start: 1;
    grid-row-end: span var(--row-span);
    /* grid-column-end: span var(--col-span); */
  }

  linked-ruler {
    display: contents;
  }

  linked-ruler > * {
    background: inherit;
    height: 100%;
    display: flex;
    justify-content: start;
    align-items: center;
    box-sizing: border-box;
  }

  ruler-score-details {
    display: flex;
    flex: 1;
  }

  @media (max-width: 800px) {
    rulers {
      grid-template-columns: 1fr;
    }

    ruler-title {
      grid-column-start: 1;
    }

    linked-ruler > linked-to {
      padding-left: 1.25em;
      grid-column-start: 1;
    }
  }

  @media (max-width: 400px) {
    ruler-bars {
      display: var(--display);
    }

    linked-ruler > linked-to {
      padding-left: 0.5em;
      grid-column-start: 1;
    }
  }
</style>

<form>
  <field>
    <label for="sort-field">Sort</label>
    <select id="sort-field" bind:value={sortField}>
      <option value="index">Chronological</option>
      <option value="total">Total score</option>
      <option value="battleyness">Battleyness</option>
      <option value="scandal">Scandal</option>
      <option value="subjectivity">Subjectivity</option>
      <option value="longevity">Longevity</option>
      <option value="dynasty">Dynasty</option>
    </select>
  </field>
  <field>
    <label for="show-linked-ratings">
      Show
      {linkedRatingName}?
      <input
        type="checkbox"
        id="show-linked-ratings"
        bind:checked={showLinkedRatings} />
    </label>
  </field>
  <field>
    <label for="name-filter"> Filter by name </label>
    <input
      type="text"
      id="name-filter"
      bind:value={nameFilter}
      on:select|preventDefault />
  </field>
</form>
<rulers bind:this={rulersGrid} style={`grid-template-columns: 1fr auto`}>
  {#each displayScores as rating}
    <ruler>
      <ruler-title
        style={`
        --row-span: ${rating.linkedRatings.length};
        --col-span: ${showLinkedRatings ? 1 : 2};`}>
        <RulerTitle {rating} on:select={() => showCard(rating)}>
          <ruler-score-details>
            <ruler-bars
              style="
            --display: {showScoreHighlight ? 'none' : 'flex'};">
              <RatingBarChart {rating} />
            </ruler-bars>
            {#if showScoreHighlight}
              <score-summary>
                <ScoreHighlightBar {rating} scoreHighlight={sortField} />
              </score-summary>
            {/if}
          </ruler-score-details>
        </RulerTitle>
      </ruler-title>

      {#if showLinkedRatings && rating.linkedRatings.length !== 0}
        {#each rating.linkedRatings as linkedRating}
          <linked-ruler>
            <linked-to>
              <span>{linkSymbol}</span>
              <ruler-title>
                <RulerTitle
                  rating={linkedRating}
                  on:select={() => showCard(linkedRating)}>
                  <ruler-bars style="flex: 2">
                    <RatingBarChart rating={linkedRating} />
                  </ruler-bars>
                </RulerTitle>
              </ruler-title>
            </linked-to>
          </linked-ruler>
        {/each}
      {/if}

      {#if !showLinkedRatings || rating.linkedRatings.length === 0}
        <linked-ruler>
          <div style="grid-row-end: span {rating.linkedRatings.length || 1}" />
        </linked-ruler>
      {/if}
    </ruler>
  {/each}
</rulers>
