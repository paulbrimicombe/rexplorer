<script context="module" lang="ts">
  import Modal from "svelte-simple-modal";
  import Monarchs from "../components/Ruler.svelte";
  import type Monarch from "../types/Monarch";
</script>

<script lang="ts">
  import { onMount, afterUpdate } from "svelte";

  export let scores: Monarch[] = [];
  let form;
  let mode: "monarchs" | "consorts" = "monarchs";

  function updateData() {
    fetch(`data/${mode}.json`)
      .then((response) => response.json())
      .then((data) => (scores = data?.scores));
  }

  onMount(updateData);
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
  <form bind:this={form}>
    <label for="mode">Mode</label>
    <select
      id="mode"
      bind:value={mode}
      on:blur={updateData}
      on:change={updateData}>
      <option value="monarchs">Monarchs</option>
      <option value="consorts">Consorts</option>
    </select>
  </form>
  <Monarchs {scores} />
</Modal>
