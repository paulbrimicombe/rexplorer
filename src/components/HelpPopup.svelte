<script lang="ts">
  export let messages: string[];
</script>

<style>
  .popup {
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1.5rem;
  }
</style>

<div class="popup">
  <ul>
    {#each messages as message}
      <li>{message}</li>
    {/each}
  </ul>
</div>
