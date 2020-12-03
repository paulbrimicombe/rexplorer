<script type="ts">
  import { fade } from "svelte/transition";
  import Banner from "../components/Banner.svelte";

  import "./_common-styles.svelte";
</script>

<style>
  a {
    text-decoration: none;
    display: inline;
  }
</style>

<svelte:head>
  <title>Rexplorer</title>
  <meta
    name="Description"
    content="The Rexplorer home page for exploring Rex Factor scores" />
</svelte:head>

<div in:fade={{ delay: 300, duration: 200 }} out:fade={{ duration: 200 }}>
  <a href="monarchs">
    <Banner
      title="English monarchs"
      imagePath="english-monarch-crown.jpg"
      imageAlt="English monarch crown"
      imageSize={64}
      hoverable={true}
      style="grid-template-columns: auto 1fr; padding: 0.5em" />
  </a>
  <a href="consorts">
    <Banner
      title="English consorts"
      imagePath="english-consort-crown.jpg"
      imageAlt="English consort crown"
      imageSize={64}
      hoverable={true}
      style="grid-template-columns: auto 1fr; padding: 0.5em" />
  </a>
  <a href="teams">
    <Banner
      title="English royal teams"
      imagePath="king-and-queen.jpg"
      imageAlt="King and Queen playing chess"
      imageSize={64}
      hoverable={true}
      style="grid-template-columns: auto 1fr; padding: 0.5em" />
  </a>
</div>
