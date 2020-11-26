<script type="ts">
  import "./_common-styles.svelte";
</script>

<style>
  links {
    font-size: 1.8rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
  }
  link-item {
    margin: 0.2em;
  }
  link-item > a {
    color: white;
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
    margin-right: 1em;
  }
</style>

<svelte:head>
  <title>Rexplorer</title>
</svelte:head>

<links>
  <link-item class="monarchs">
    <a href="monarchs">
      <img
        width="64"
        height="64"
        src="english-monarch-crown.webp"
        alt="English monarch crown" />
      Rexplore English monarchs</a>
  </link-item>
  <link-item class="consorts">
    <a href="consorts">
      <img
        width="64"
        height="64"
        src="english-consort-crown.webp"
        alt="English consort crown" />
      Rexplore English consorts</a>
  </link-item>
  <link-item class="teams">
    <a href="teams">
      <img
        width="64"
        height="64"
        src="king-and-queen.webp"
        alt="King and Queen playing chess" />
      Rexplore English royal teams</a>
  </link-item>
</links>
