<script lang="ts">
  import { getContext } from "svelte";

  import type Rating from "../routes/Rating";
  import Card from "./Card.svelte";
  import ScoreSummary from "./ScoreSummary.svelte";
  export let scores: Rating[];

  let sortField = null;

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

  const sortRatings = (
    event: FocusEvent & { currentTarget: HTMLSelectElement }
  ) => {
    const sortField = event.currentTarget.value;

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
  }
</style>

<monarchs>
  <form>
    <label for="sort-field">Sort by</label>
    <select
      id="sort-field"
      bind:value={sortField}
      on:change={sortRatings}
      on:blur={sortRatings}>
      <option value="index">Reign</option>
      <option value="total">Total score</option>
      <option value="battleyness">Battleyness</option>
      <option value="scandal">Scandal</option>
      <option value="subjectivity">Subjectivity</option>
      <option value="longevity">Longevity</option>
      <option value="dynasty">Dynasty</option>
    </select>
  </form>
  {#each scores as monarch}
    <ScoreSummary
      rating={monarch}
      scoreHighlight={sortField}
      on:select={() => showCard(monarch)} />
  {/each}
</monarchs>
