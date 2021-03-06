<script lang="ts">
  import { getContext } from "svelte";

  import type Rating from "../types/Rating";
  import type RatedPerson from "../types/RatedPerson";
  import Card from "./Card.svelte";
  import RulerTitle from "./RulerTitle.svelte";
  import RatingBarChart from "./RatingBarChart.svelte";
  import ScoreHighlightBar from "./ScoreHighlightBar.svelte";
  import { fly } from "svelte/transition";

  export let scores: RatedPerson[] = [];
  export let linkSymbol;

  export let highlightField: string | null = null;
  export let showLinkedRatings: boolean = false;

  const modal: any = getContext("simple-modal");

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
        transitionWindow: fly,
        transitionWindowProps: {
          x: -1000,
          y: 100,
          duration: 500,
        },
        styleCloseButton: {
          cursor: 'pointer',
          borderRadius: '30%',
          boxShadow: "0 0 0 1px #00000033",
          right: "2rem"
        },
      }
    );
  };
</script>

<style>
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

<rulers style={`grid-template-columns: 1fr auto`}>
  {#each scores as rating}
    <ruler>
      <ruler-title
        style={`
        --row-span: ${rating.linkedRatings.length};`}>
        <RulerTitle {rating} on:select={() => showCard(rating)}>
          <ruler-score-details>
            <ruler-bars
              style="
            --display: {highlightField ? 'none' : 'flex'};">
              <RatingBarChart {rating} />
            </ruler-bars>
            {#if highlightField}
              <score-summary>
                <ScoreHighlightBar {rating} scoreHighlight={highlightField} />
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
