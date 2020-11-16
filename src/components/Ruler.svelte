<script lang="ts">
  import { getContext, beforeUpdate } from "svelte";
  import { fade } from "svelte/transition";

  import type Rating from "../types/Rating";
  import type Monarch from "../types/Monarch";
  import type Consort from "../types/Consort";
  import Card from "./Card.svelte";
  import ScoreSummary from "./ScoreSummary.svelte";

  export let scores: (Monarch | Consort)[] = [];

  let displayScores: (Rating & { linkedRulers: Rating[] })[] = [];

  beforeUpdate(() => {
    displayScores = scores.map((score) => {
      if ("consorts" in score) {
        return {
          ...score,
          linkedRulers: score.consorts,
        };
      } else {
        return {
          ...score,
          linkedRulers: score.monarchs,
        };
      }
    });
  });

  let sortField = null;
  let showLinkedRatings = false;
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
    display: flex;
    flex-direction: column;
    transition: height 1s;
  }

  ruler:nth-child(even) {
    background-color: rgba(0, 0, 0, 0.05);
  }

  linked-rulers {
    flex: 1;
    display: flex;
    flex-direction: column;
    height: 100%;
  }
</style>

<rulers>
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
        {#if 'consorts' in (scores[0] || {})}consorts?{:else}monarchs?{/if}
        <input
          type="checkbox"
          id="show-linked-ratings"
          bind:checked={showLinkedRatings} />
      </label>
    </field>
  </form>
  <ruler-list>
    {#each displayScores as score}
      <ruler
        style={`height: ${showLinkedRatings ? (score.linkedRulers.length || 1) * 5 : 5}em`}>
        <ScoreSummary
          rating={score}
          scoreHighlight={sortField}
          on:select={() => showCard(score)}>
          {#if showLinkedRatings}
            <linked-rulers transition:fade={{ duration: 400 }}>
              {#each score.linkedRulers as consort}
                <ScoreSummary
                  rating={consort}
                  on:select={() => showCard(consort)} />
              {/each}
            </linked-rulers>
          {/if}
        </ScoreSummary>
      </ruler>
    {/each}
  </ruler-list>
</rulers>
