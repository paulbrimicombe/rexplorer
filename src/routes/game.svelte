<script lang="ts">
  import Modal from "svelte-simple-modal";

  import { fade } from "svelte/transition";
  import Banner from "../components/Banner.svelte";
  import Game from "../components/game/Game.svelte";
  import type Rating from "../types/Rating";

  let scores: Rating[] = [];
  let ratingType: "monarchs" | "consorts" | "teams" = "monarchs";
  let difficulty: "easy" | "hard" = "easy";
  let playerName = "Player";

  const fetchScores = async () => {
    console.log("FETCHING SCORES....");
    const res = await fetch(`data/${ratingType}.json`);
    const data = (await res.json()) as { scores: Rating[] };

    if (res.status === 200) {
      scores = data.scores;
    } else {
      this.error(res.status, res.statusText);
    }
  };
</script>

<style>
  form {
    display: grid;
    grid-template-columns: auto auto;
    justify-content: center;
    grid-column-gap: 1em;
    grid-row-gap: 1em;
  }

  :global(nav) {
    display: none;
  }
</style>

<svelte:head>
  <title>Rexplorer game</title>
  <meta
    name="Description"
    content="A card game based on the ratings from the Rex Factor podcast" />
</svelte:head>

<Modal>
  <div in:fade={{ delay: 300, duration: 200 }} out:fade={{ duration: 200 }}>
    {#if scores.length === 0}
      <div in:fade={{ delay: 300, duration: 200 }} out:fade={{ duration: 200 }}>
        <Banner
          title="Rexplorer the Game"
          imagePath="king-and-queen-playing-chess.jpg"
          imageAlt="King and Queen playing chess" />
        <p>
          In the Rexplorer game you will pit your wits against Dunstan the Fun
          Sponge!
        </p>
        <p>Choose your name and card category to play the game.</p>
        <form on:submit|preventDefault|stopPropagation={fetchScores}>
          <label for="name">Player name</label>
          <input type="text" bind:value={playerName} />
          <label for="rating-type">Card category</label>
          <select bind:value={ratingType} id="rating-type">
            <option value="monarchs">English monarchs</option>
            <option value="consorts">English consorts</option>
            <option value="teams">English royal teams</option>
          </select>
          <label for="difficulty">Difficulty</label>
          <select bind:value={difficulty} id="difficulty">
            <option value="easy">Easy</option>
            <option value="hard">Hard</option>
          </select>
          <button type="sumbit">Play the game!</button>
        </form>
      </div>
    {:else}
      <div in:fade={{ delay: 300, duration: 200 }} out:fade={{ duration: 200 }}>
        <Game {scores} {playerName} {difficulty} />
      </div>
    {/if}
  </div>
</Modal>
