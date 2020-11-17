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
        consort.linkedRatings = consort.monarchs;
      });
      return data;
    } else {
      this.error(res.status, res.statusMessage);
    }
  }
</script>

<script lang="ts">
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
    font-size: 1.5em;
    text-transform: uppercase;
    font-weight: 700;
    color: white;
    box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.2);
  }

  h1 img {
    height: 1.5em;
    width: 1.5em;
    margin-right: 0.5em;
    box-shadow: 0 0 2px 2px white;
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
  <h1 class="consorts">
    <img src="english-consort-crown.png" alt="English consort crown" />
    English Consorts
  </h1>
  <RatingsTable {scores} linkedRatingName="monarchs" />
</Modal>
