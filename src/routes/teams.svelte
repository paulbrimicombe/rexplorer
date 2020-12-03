<script context="module" lang="ts">
  import Modal from "svelte-simple-modal";
  import "./_common-styles.svelte";
  import RatingsTable from "../components/RatingsTable.svelte";
  import type RatedPerson from "../types/RatedPerson";

  export async function preload() {
    const res = await this.fetch(`data/teams.json`);
    const data = await res.json();

    if (res.status === 200) {
      (data?.scores || []).forEach((monarch: RatedPerson) => {
        monarch.linkedRatings = monarch.linkedRatings || [];
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
  <title>Rexplorer consort & monarch teams</title>
  <meta
    name="Description"
    content="Rexplorer for exploring Rex Factor scores for English Monarch & Consort teams" />
</svelte:head>

<Modal>
  <div in:fade={{ delay: 300, duration: 200 }} out:fade={{ duration: 200 }}>
    <Banner
      title="English Royal Teams"
      imagePath="king-and-queen.jpg"
      imageAlt="King and queen playing chess"
      imageSize={64} />
    <RatingsTable {scores} linkedRatingName="individual scores" linkSymbol="" />
  </div>
</Modal>
