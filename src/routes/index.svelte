<script context="module" lang="ts">
  export function preload() {
    return this.fetch(`data/scores.json`)
      .then((response: { json: () => any }) => response.json())
      .then((scores) => ({
        scores: scores.monarchs,
      }));
  }
</script>

<script lang="ts">
  type Scores = Readonly<{
    battleyness: number;
    scandal: number;
    subjectivity: number;
    longevity: number;
    dynasty: number;
    total: number;
    rexFactor: number;
  }>;

  export let scores: ({ monarch: string } & Scores)[];
</script>

<style>
  h1,
  p {
    text-align: center;
    margin: 0 auto;
  }

  h1 {
    font-size: 2.8em;
    text-transform: uppercase;
    font-weight: 700;
    margin: 0 0 0.5em 0;
  }

  p {
    margin: 1em auto;
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

<ul>
  {#each scores as monarch}
    <li>{monarch.monarch}</li>
  {/each}
</ul>

<p>
  <strong>Try editing this file (src/routes/index.svelte) to test live
    reloading.</strong>
</p>
