<script context="module" lang="ts">
  import type Rating from "./Rating";
  import ScoreSummary from "../components/ScoreSummary.svelte";

  export function preload() {
    return this.fetch(`data/scores.json`)
      .then((response: { json: () => any }) => response.json())
      .then((scores) => ({
        scores: scores.monarchs as Rating[],
      }));
  }
</script>

<script lang="ts">
  export let scores: Rating[];
</script>

<style>
  h1 {
    text-align: center;
    margin: 0 auto;
    font-size: 2.8em;
    text-transform: uppercase;
    font-weight: 700;
    margin: 0 0 0.5em 0;
  }

  @media (min-width: 480px) {
    h1 {
      font-size: 4em;
    }
  }
</style>

<svelte:head>
  <title>Rexplorer</title>
</svelte:head>

<h1>Welcome to the Rexplorer!</h1>

<monarchs>
  {#each scores as monarch}
    <ScoreSummary rating={monarch} />
  {/each}
</monarchs>
