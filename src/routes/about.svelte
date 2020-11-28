<script lang="ts">
  import { fade } from "svelte/transition";
</script>

<svelte:head>
  <title>About</title>
</svelte:head>

<div in:fade={{ delay: 300, duration: 200 }} out:fade={{ duration: 200 }}>
  <h1>About the Rexplorer</h1>

  <p>
    The Rexplorer is for fans of the
    <a href="https://rexfactor.wordpress.com/" target="blank">Rex Factor podcast</a>
  </p>
</div>
