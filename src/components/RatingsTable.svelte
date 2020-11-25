<script lang="ts">
  import { getContext } from "svelte";
  import { fade } from "svelte/transition";

  import type Rating from "../types/Rating";
  import type RatedPerson from "../types/RatedPerson";
  import Card from "./Card.svelte";
  import ScoreSummary from "./ScoreSummary.svelte";

  export let scores: RatedPerson[] = [];
  export let linkedRatingName = "linked ratings";

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
    padding: 0.3em 0.3em;
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
    line-height: 0.5em;
    font-size: 2em;
    height: 0.7em;
    display: flex;
    margin-left: 1.25em;
    margin-right: 0.25em;
  }

  linked-to > span {
    display: block;
  }

  linked-rulers {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: start;
  }

  linked-ruler {
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
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
        {linkedRatingName}?
        <input
          type="checkbox"
          id="show-linked-ratings"
          bind:checked={showLinkedRatings} />
      </label>
    </field>
  </form>
  <ruler-list>
    {#each scores as score}
      <ruler>
        <ScoreSummary
          rating={score}
          scoreHighlight={sortField}
          on:select={() => showCard(score)}>
          {#if showLinkedRatings}
            <linked-rulers transition:fade={{ duration: 400 }}>
              {#each score.linkedRatings as consort}
                <linked-ruler>
                  <linked-to><span>⚭</span></linked-to>
                  <ScoreSummary
                    rating={consort}
                    on:select={() => showCard(consort)} />
                </linked-ruler>
              {/each}
            </linked-rulers>
          {/if}
        </ScoreSummary>
      </ruler>
    {/each}
  </ruler-list>
</rulers>
