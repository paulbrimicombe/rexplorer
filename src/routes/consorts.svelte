<script context="module" lang="ts">
  import Modal from "svelte-simple-modal";
  import "./_common-styles.svelte";
  import RatingsTable from "../components/RatingsTable.svelte";
  import type Consort from "../types/Consort";
  import type RatedPerson from "../types/RatedPerson";

  export async function preload() {
    const res = await this.fetch(`data/consorts.json`);
    const data = (await res.json()) as { scores: Consort[] };

    if (res.status === 200) {
      (data?.scores || []).forEach((consort: Consort & RatedPerson) => {
        consort.linkedRatings = consort.monarchs || [];
      });
      return data;
    } else {
      this.error(res.status, res.statusMessage);
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
    margin: 0 auto;
    font-size: 2rem;
    color: black;
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
    content="Rexplorer for exploring Rex Factor scores for English Consorts" />
</svelte:head>

<Modal>
  <div in:fade={{ delay: 300, duration: 200 }} out:fade={{ duration: 200 }}>
    <h1 class="banner">
      <img
        width="64"
        height="64"
        src="english-consort-crown.jpg"
        alt="English consort crown" />
      <p>English Consorts</p>
    </h1>
    <RatingsTable {scores} linkedRatingName="monarchs" />
  </div>
</Modal>
