<script type="ts">
  import { fade } from "svelte/transition";

  import "./_common-styles.svelte";
</script>

<style>
  links {
    font-size: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
  }

  h1 {
    margin: 0;
  }

  link-item {
    margin: 0.2em;
  }

  link-item > a {
    color: black;
    text-decoration: none;
    display: flex;
    align-items: center;
    flex-direction: row;
    line-height: 1em;
    padding: 0.5em;
  }

  link-item > a:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  link-item > a > img {
    box-shadow: 0 0 2px 2px white;
    margin-right: 0.5em;
  }
</style>

<svelte:head>
  <title>Rexplorer</title>
  <meta
    name="Description"
    content="The Rexplorer home page for exploring Rex Factor scores" />
</svelte:head>

<links in:fade={{ delay: 300, duration: 200 }} out:fade={{ duration: 200 }}>
  <link-item class="banner">
    <a href="monarchs">
      <img
        width="64"
        height="64"
        src="english-monarch-crown.jpg"
        alt="English monarch crown" />
      <h1>
        <p>Rexplore English monarchs</p>
      </h1></a>
  </link-item>
  <link-item class="banner">
    <a href="consorts">
      <img
        width="64"
        height="64"
        src="english-consort-crown.jpg"
        alt="English consort crown" />
      <h1>
        <p>Rexplore English consorts</p>
      </h1></a>
  </link-item>
  <link-item class="banner">
    <a href="teams">
      <img
        width="64"
        height="64"
        src="king-and-queen.jpg"
        alt="King and Queen playing chess" />
      <h1>
        <p>Rexplore English royal teams</p>
      </h1></a>
  </link-item>
</links>
