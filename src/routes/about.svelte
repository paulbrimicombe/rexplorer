<script lang="ts">
  import { fade } from "svelte/transition";
</script>

<svelte:head>
  <title>About</title>
</svelte:head>

<style>
  h1 {
    padding: 0.4em;
    display: flex;
  }
</style>

<div in:fade={{ delay: 300, duration: 200 }} out:fade={{ duration: 200 }}>
  <h1 class="banner"><p>About the Rexplorer</p></h1>

  <p>
    The Rexplorer is for fans of the
    <a href="https://rexfactor.wordpress.com/" target="blank">Rex Factor podcast</a>
  </p>
</div>
