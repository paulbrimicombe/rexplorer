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
  import Banner from "../components/Banner.svelte";

  export let scores: RatedPerson[] = [];
</script>

<svelte:head>
  <title>Rexplorer monarchs</title>
  <meta
    name="Description"
    content="Rexplorer for exploring Rex Factor scores for English Monarchs" />
</svelte:head>

<Modal>
  <div in:fade={{ delay: 300, duration: 200 }} out:fade={{ duration: 200 }}>
    <Banner
      title="English monarchs"
      imagePath="english-monarch-crown.jpg"
      imageAlt="English monarch crown"
      imageSize={64} />
    <RatingsTable {scores} linkedRatingName="consorts" />
  </div>
</Modal>
