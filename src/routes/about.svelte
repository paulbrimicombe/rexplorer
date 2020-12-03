<script lang="ts">
  import { fade } from "svelte/transition";
  import Banner from "../components/Banner.svelte";
</script>

<svelte:head>
  <title>About</title>
</svelte:head>

<div in:fade={{ delay: 300, duration: 200 }} out:fade={{ duration: 200 }}>
  <Banner
    title="About the Rexplorer"
    imagePath="confessor.jpg"
    imageAlt="Edward the Confessor looking at his crown"
    imageSize={64} />

  <p>
    The Rexplorer is for fans of the
    <a href="https://rexfactor.wordpress.com/" target="blank">Rex Factor podcast</a>
  </p>
</div>
