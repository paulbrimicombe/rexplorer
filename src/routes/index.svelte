<script type="ts">
  import { fade } from "svelte/transition";
  import Banner from "../components/Banner.svelte";

  import "./_common-styles.svelte";
</script>

<style>
  h1 {
    margin: 0 0.77em;
    font-size: 1.3em;
  }

  h1 > a {
    text-decoration: underline;
  }

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
  <h1>Explore some scores from the
    <a href="https://rexfactor.wordpress.com/" target="_blank">Rex Factor podcast</a>!
  </h1>
  <a href="monarchs">
    <Banner
      title="English monarchs"
      imagePath="monarch.jpg"
      imageAlt="English monarch"
      imageSize={64}
      hoverable={true}
      alignment={'left'}
      style="margin: 0.5em;" />
  </a>
  <a href="consorts">
    <Banner
      title="English consorts"
      imagePath="consort.jpg"
      imageAlt="English consort"
      imageSize={64}
      hoverable={true}
      alignment={'left'}
      style="margin: 0.5em;" />
  </a>
  <a href="teams">
    <Banner
      title="English royal teams"
      imagePath="king-and-queen.jpg"
      imageAlt="English King and Queen"
      imageSize={64}
      hoverable={true}
      alignment={'left'}
      style="margin: 0.5em;" />
  </a>
  <a href="game">
    <Banner
      title="Play the game"
      imagePath="king-and-queen-playing-chess.jpg"
      imageAlt="King and Queen playing chess"
      imageSize={64}
      hoverable={true}
      alignment={'left'}
      style="margin: 0.5em;" />
  </a>
</div>
