<script lang="ts">
  import { afterUpdate, beforeUpdate, getContext } from "svelte";

  import type Rating from "../types/Rating";
  import type RatedPerson from "../types/RatedPerson";
  import Card from "./Card.svelte";
  import RulerTitle from "./RulerTitle.svelte";
  import RatingBarChart from "./RatingBarChart.svelte";
  import ScoreHighlightBar from "./ScoreHighlightBar.svelte";

  export let scores: RatedPerson[] = [];
  export let linkedRatingName = "linked ratings";

  let sortField = null;
  let showScoreHighlight = null;
  let showLinkedRatings = false;
  let rulersGrid = null;

  const modal: any = getContext("simple-modal");

  beforeUpdate(() => {
    showScoreHighlight =
      sortField && sortField !== "index" && sortField !== "total";
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

  const sortRatings = () => {
    if (sortField) {
      scores = scores.sort((a, b) => {
        if (a[sortField] === b[sortField]) {
          return 0;
        } else {
          if (sortField === "index") {
            return a[sortField] > b[sortField] ? 1 : -1;
          }
          return a[sortField] > b[sortField] ? -1 : 1;
        }
      });
    }
  };

  const calculateBarsColSpan = (
    score: RatedPerson,
    showLinkedRatings: boolean,
    showScoreHighlight: boolean
  ) => {
    if (showScoreHighlight) {
      return 1;
    }

    if (score.linkedRatings.length && showLinkedRatings) {
      return 2;
    }

    return 4;
  };

  const calculateHighlightColSpan = (
    score: RatedPerson,
    showLinkedRatings: boolean
  ) => {
    let colSpan = 1;
    if (!score.linkedRatings.length || !showLinkedRatings) {
      colSpan += 2;
    }
    return colSpan;
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

  ruler-details { 
    display: contents;
  }

  ruler-details > * {
    background: inherit;
    height: 100%;
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 0.7em 0;
    box-sizing: border-box;
  }


  linked-to {
    color: #b69119;
    font-size: 2rem;
    display: flex;
    padding-left: 1em;
    padding-right: 0.25em;
  }

  linked-to > span {
    display: block;
    padding-bottom: 0.5rem;
  }

  rulers {
    display: grid;
    grid-template-columns: 1fr auto auto auto 1fr;
    align-items: center;
    justify-content: left;
  }

  ruler-details > ruler-title {
    grid-column-start: 1;
    grid-row-end: span var(--row-span);
  }
  ruler-details > ruler-bars {
    grid-column-start: 2;
    grid-column-end: span var(--col-span);
    grid-row-end: span var(--row-span);
  }
  ruler-details > score-summary {
    grid-column-start: 3;
    grid-column-end: span var(--col-span);
    grid-row-end: span var(--row-span);
  }

  linked-to {
    grid-column-start: var(--col-start);
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

  @media (max-width: 800px) {
    ruler-details > ruler-title {
      grid-column-start: 1;
    }

    ruler-details > ruler-bars {
      grid-column-start: 2;
      grid-column-end: span 1;
      display: var(--display);
    }

    ruler-details > ruler-bars[data-last-col="true"] {
      grid-column-end: span 4;
    }

    linked-ruler > linked-to {
      grid-column-start: 1;
      padding-left: 2em;
    }

    linked-ruler > ruler-bars {
      grid-column-end: span 4;
    }

    ruler-details > score-summary {
      grid-column-end: span 4;
      padding-right: 0.7em;
    }
  }
</style>

<form>
  <field>
    <label for="sort-field">Sort</label>
    <select
      id="sort-field"
      bind:value={sortField}
      on:change={sortRatings}
      on:blur={sortRatings}>
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
</form>
<rulers bind:this={rulersGrid}>
  {#each scores as score}
    <ruler>
      <ruler-details>
        <ruler-title style={`--row-span: ${score.linkedRatings.length}`}>
          <RulerTitle rating={score} on:select={() => showCard(score)} />
        </ruler-title>
        <ruler-bars
          data-last-col={!showScoreHighlight}
          style="--row-span: {score.linkedRatings.length};
          --col-span: {calculateBarsColSpan(score, showLinkedRatings, showScoreHighlight)};
          --display: {showScoreHighlight ? 'none' : 'block'};
        ">
          <RatingBarChart rating={score} />
        </ruler-bars>
        {#if showScoreHighlight}
          <score-summary
            style={`
            --col-span: ${calculateHighlightColSpan(score, showLinkedRatings)};
            --row-span: ${score.linkedRatings.length}`}>
            <ScoreHighlightBar rating={score} scoreHighlight={sortField} />
          </score-summary>
        {/if}
      </ruler-details>

      {#if showLinkedRatings}
        {#each score.linkedRatings as consort}
          <linked-ruler>
            <linked-to style={`--col-start: 4`}>
              <span>⚭</span>
              <ruler-title>
                <RulerTitle
                  rating={consort}
                  on:select={() => showCard(consort)} />
              </ruler-title>
            </linked-to>
            <ruler-bars>
              <RatingBarChart rating={score} />
            </ruler-bars>
          </linked-ruler>
        {/each}
      {/if}
    </ruler>
  {/each}
</rulers>
