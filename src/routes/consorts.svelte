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
  import Banner from "../components/Banner.svelte";

  export let scores: RatedPerson[] = [];
</script>

<svelte:head>
  <title>Rexplorer monarchs</title>
  <meta
    name="Description"
    content="Rexplorer for exploring Rex Factor scores for English Consorts" />
</svelte:head>

<Modal>
  <div in:fade={{ delay: 300, duration: 200 }} out:fade={{ duration: 200 }}>
    <Banner
      title="English consorts"
      imagePath="english-consort-crown.jpg"
      imageAlt="English consort crown"
      imageSize={64} />
    <RatingsTable {scores} linkedRatingName="monarchs" />
  </div>
</Modal>
