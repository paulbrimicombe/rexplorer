<script context="module" lang="ts">
  import Modal from "svelte-simple-modal";
  import "./_common-styles.svelte";
  import RatingsTable from "../components/RatingsTable.svelte";
  import type Monarch from "../types/Monarch";
  import type RatedPerson from "../types/RatedPerson";

  export async function preload() {
    const res = await this.fetch(`data/monarchs.json`);
    const data = await res.json();

    if (res.status === 200) {
      (data?.scores || []).forEach((monarch: Monarch & RatedPerson) => {
        monarch.linkedRatings = monarch.consorts || [];
      });
      return data;
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script lang="ts">
  import { fade } from "svelte/transition";

  export let scores: RatedPerson[] = [];
</script>

<style>
  h1 {
    padding: 0.3em;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0em auto;
    font-size: 2rem;
    font-weight: 700;
    color: white;
    box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.2);
  }

  h1 img {
    margin-right: 0.5em;
    box-shadow: 0 0 2px 2px white;
  }
</style>

<svelte:head>
  <title>Rexplorer monarchs</title>
  <meta
    name="Description"
    content="Rexplorer for exploring Rex Factor scores for English Monarchs" />
</svelte:head>

<Modal>
  <div in:fade={{ delay: 300, duration: 200 }} out:fade={{ duration: 200 }}>
    <h1 class="monarchs">
      <img
        width="64"
        height="64"
        src="english-monarch-crown.jpg"
        alt="English monarch crown" />
      English Monarchs
    </h1>
    <RatingsTable {scores} linkedRatingName="consorts" />
  </div>
</Modal>
