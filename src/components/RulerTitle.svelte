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
    background: radial-gradient(
        ellipse farthest-corner at right bottom,
        #ffe56f 0%,
        #fddb98 8%,
        #c59f4e 30%,
        #b1985d 40%,
        transparent 80%
      ),
      radial-gradient(
        ellipse farthest-corner at left top,
        #ffffff 0%,
        #ffffac 15%,
        #ddc687 35%,
        #a08d61 62.5%,
        #8b784a 100%
      );
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

  name > span {
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
  on:click|preventDefault|stopPropagation={() => dispatch('select', rating)}
  tabindex="0">
  <total>{rating.total}</total>
  <name>
    {#each rating.name as name, index}
      <span>
        {name}
        {#if rating.rexFactor[index]}
          <badge><img src="crown.svg" alt="Rex Factor winner" /></badge>
        {/if}
      </span>
      {#if index !== rating.name.length - 1}<span> & </span>{/if}
    {/each}
  </name>
  <slot />
</button>
