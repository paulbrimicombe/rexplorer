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
    The Rexplorer helps fans of the
    <a href="https://rexfactor.wordpress.com/" target="_blank">Rex Factor podcast</a> explore the scores
    awarded to the various Monarchs and Consorts.
  </p>
  <p>
    The card images are all sourced from <a href="https://commons.wikimedia.org/" target="_blank">Wikimedia Commons</a>
    apart from some of the early English monarch images which come from the <a href="https://www.bl.uk/collection-items/genealogical-chronicle-of-the-english-kings" target="_blank">
    Genealogical Chronicle of the English Kings from the British Library</a>.
  </p>
  <p>
    This site is open source and the source code can be viewed at <a href="https://github.com/paulbrimicombe/rexplorer" target="_blank">
    https://github.com/paulbrimicombe/rexplorer</a>.
  </p>
</div>
