<script lang="ts">
  import type Rating from "../types/Rating";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  export let rating: Rating;
</script>

<style>
  button:hover {
    border: solid 1px red;
  }

  button {
    height: 100%;
    width: 100%;
    background: none;
    border: 1px rgba(0, 0, 0, 0) solid;
    cursor: pointer;
    flex: 1;
    display: flex;
    align-items: center;
    justify-items: center;
    border-radius: 0.2em;
    margin: 0.5em 0.2em;
    padding: 0.2em;
  }

  total {
    border-radius: 50%;
    width: 3em;
    height: 3em;
    font-size: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #d4af37;
    background: linear-gradient(to bottom, #d4af37 0%, #c5a028 100%);
    border: 1px solid #b69119;
    box-shadow: inset 0 1px 0 #e3be46;
    margin-right: 0.5em;
  }

  img {
    width: 1.5em;
    transform: rotate(-45deg);
  }

  name {
    font-size: 1.2rem;
    margin: 0 0.5em;
    text-align: left;
    flex: 1;
    position: relative;
  }

  badge {
    position: absolute;
    left: -0.9em;
    top: -0.5em;
    z-index: 10;
  }
</style>

<button
  on:click|preventDefault|stopPropagation={() => dispatch('select', rating)}>
  <total>{rating.total}</total>
  <name>
    {#if rating.rexFactor}
      <badge><img src="/crown.svg" alt="Rex Factor winner" /></badge>
    {/if}
    {rating.name}
  </name>
</button>
