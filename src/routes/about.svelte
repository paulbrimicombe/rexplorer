<script lang="ts">
  import { fade } from "svelte/transition";
  import Banner from "../components/Banner.svelte";
</script>

<style>
  .uncial {
    font-family: uncial;
  }
</style>

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
    apart from some of the early English monarch images which come from the
    <a href="https://www.bl.uk/collection-items/genealogical-chronicle-of-the-english-kings" target="_blank">
    Genealogical Chronicle of the English Kings</a> from the British Library (shelfmark Royal MS 14 B VI).
    You can explore this manuscript in more detail at the British Library's
    <a href="http://www.bl.uk/turning-the-pages/?id=ca3a4982-77cc-47ce-ad2c-64e046b88b45&type=sd_planar" target="_blank">
    Turning the Pages™</a> website.
  </p>
  <p>
    The <span class="uncial">uncial</span> font was extracted from
    <a href="https://commons.wikimedia.org/wiki/File:Evolution_of_minuscule.svg" target="_blank">this public domain document</a>.
    The font source can be viewed <a href="https://github.com/paulbrimicombe/rexplorer/tree/main/uncial" target="_blank">here</a>.
  </p>
  <p>
    This site is open source under the <a href="https://www.apache.org/licenses/LICENSE-2.0" target="_blank">Apache 2.0 license</a>
    and the source code can be viewed at <a href="https://github.com/paulbrimicombe/rexplorer" target="_blank">
    https://github.com/paulbrimicombe/rexplorer</a>.
  </p>
</div>
