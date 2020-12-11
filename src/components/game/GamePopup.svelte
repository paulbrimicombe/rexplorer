<script lang="ts">
  export let message: string;
</script>

<style>
  .popup {
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 2rem;
    text-align: center;
  }
</style>

<div class="popup">
  <div>{message}</div>
</div>
