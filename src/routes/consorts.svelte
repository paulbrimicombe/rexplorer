<script context="module" lang="ts">
  import Modal from "svelte-simple-modal";
  import RatingsPage from "../components/RatingsPage.svelte";
  import {
    getFilterFromQuery,
    setQueryFromFilter,
  } from "../components/RatingsPage.svelte";
  import "./_common-styles.svelte";
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
  import { afterUpdate } from "svelte";

  const queryBindings = getFilterFromQuery();

  export let scores: RatedPerson[] = [];
  export let sortField: string | null = queryBindings.sortField;
  export let showLinkedRatings: boolean = queryBindings.showLinkedRatings;
  export let nameFilter: string | null = queryBindings.nameFilter;

  afterUpdate(() =>
    setQueryFromFilter({
      sortField,
      showLinkedRatings,
      nameFilter,
    })
  );
</script>

<svelte:head>
  <title>Rexplorer monarchs</title>
  <meta
    name="Description"
    content="Rexplorer for exploring Rex Factor scores for English Consorts" />
</svelte:head>

<Modal>
  <div in:fade={{ delay: 300, duration: 200 }} out:fade={{ duration: 200 }}>
    <RatingsPage
      ratingName="English consorts"
      linkedRatingName="monarchs"
      ratingImageSrc="english-consort-crown.jpg"
      ratingImageAlt="English consort crown"
      {scores}
      {sortField}
      {showLinkedRatings}
      {nameFilter}
      on:change={(event) => {
        sortField = event.detail.sortField;
        showLinkedRatings = event.detail.showLinkedRatings;
        nameFilter = event.detail.nameFilter;
      }} />
  </div>
</Modal>
