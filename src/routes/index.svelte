<script context="module" lang="ts">
  import type Rating from "./Rating";
  import Modal from "svelte-simple-modal";
  import Monarchs from "../components/Monarchs.svelte";
  import type Monarch from "./Monarch";

  export function preload() {
    return this.fetch(`data/scores.json`)
      .then((response: { json: () => any }) => response.json())
      .then((scores) => ({
        scores: scores.monarchs as Rating[],
      }));
  }
</script>

<script lang="ts">
  export let scores: Monarch[];
</script>

<style>
  h1 {
    text-align: center;
    margin: 0 auto;
    font-size: 1.5em;
    text-transform: uppercase;
    font-weight: 700;
    margin: 0;
  }

  @media (min-width: 480px) {
    h1 {
      font-size: 2.5em;
    }
  }
</style>

<svelte:head>
  <title>Rexplorer</title>
</svelte:head>

<Modal>
  <h1>Welcome to the Rexplorer!</h1>
  <Monarchs {scores} />
</Modal>
