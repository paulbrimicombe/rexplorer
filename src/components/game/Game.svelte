<script lang="ts">
  import { getContext } from "svelte";
  import { fly, slide } from "svelte/transition";
  import Card from "../Card.svelte";
  import GamePopup from "./GamePopup.svelte";
  import type Rating from "../../types/Rating";

  export let scores: Rating[];
  export let playerName: string;
  export let difficulty: "easy" | "hard" = "hard";

  const modal: any = getContext("simple-modal");

  const pause = (millis) =>
    new Promise((resolve) => setTimeout(resolve, millis));

  const shuffle = (scores: Rating[]): Rating[] => {
    const shuffled = [...scores];
    for (let i = shuffled.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  let playerPack: Rating[];
  let computerPack: Rating[];

  let playerCard: Rating | null = null;
  let computerCard: Rating | null = null;

  let playerCardsLeft;
  let computerCardsLeft;

  let dealingPlayerCard;
  let dealingComputerCard;

  let formDisabled;
  let currentPlayer: "player" | "computer";

  const modalStyleProperties = {
    styleBg: {
      background: "none",
      top: "1em",
      left: 0,
    },
    styleWindow: {
      background: "rgba(0,0,0,0.8)",
      width: "fit-content",
    },
    styleContent: {},
    transitionWindow: slide,
    styleCloseButton: {
      display: "none",
      cursor: "pointer",
      borderRadius: "30%",
      boxShadow: "0 0 0 1px #00000033",
    },
  };

  const resetGame = () => {
    const shuffledPack = shuffle(scores);
    playerPack = shuffledPack.splice(shuffledPack.length / 2);
    computerPack = shuffledPack;
    playerCardsLeft = playerPack.length;
    computerCardsLeft = computerPack.length;
    currentPlayer = "player";
    dealingPlayerCard = false;
    dealingComputerCard = false;
    formDisabled = false;
  };

  const showMessage = async ({ message, closeAfter = 1000 }) => {
    const shouldReEnableForm = !formDisabled;

    formDisabled = true;
    const keypressListener = () => {
      modal.close();
    };
    if (typeof document !== "undefined") {
      document.addEventListener("keypress", keypressListener);
    }

    const modalClosingPromise = new Promise<void>((resolve) => {
      modal.isOpen = true;
      modal.open(GamePopup, { message }, modalStyleProperties, {
        onClose: async () => {
          modal.isOpen = false;
          resolve();
        },
      });
    });

    await Promise.race([modalClosingPromise, pause(closeAfter)]);

    if (!modal.isClosed) {
      modal.close();
    }

    modal.isOpen = false;
    if (typeof document !== "undefined") {
      document.removeEventListener("keypress", keypressListener);
    }
    if (shouldReEnableForm) {
      formDisabled = false;
    }
  };

  const revealNextCard = async (player: "computer" | "player") => {
    if (player === "computer") {
      dealingComputerCard = true;
      await pause(1000);
      computerCard = computerPack.shift();
      dealingComputerCard = false;
    } else {
      dealingPlayerCard = true;
      await pause(1000);
      playerCard = playerPack.shift();
      dealingPlayerCard = false;
    }
  };

  const checkForGameEnd = async () => {
    if (playerCardsLeft === 0) {
      await showMessage({
        message:
          "You have no cards left — Dunstan the Fun Sponge has won the game!!",
        closeAfter: 3000,
      });
      resetGame();
    } else if (computerCardsLeft === 0) {
      await showMessage({
        message:
          "Dunstan the Fun Sponge has no cards left — you have won the game!!",
        closeAfter: 3000,
      });
      resetGame();
    }
  };

  const chooseCategory = () => {
    const categories = [
      "battleyness",
      "scandal",
      "subjectivity",
      "longevity",
      "dynasty",
    ];

    if (difficulty === "hard") {
      return categories.sort((a, b) => {
        if (computerCard[a] > computerCard[b]) {
          return -1;
        } else if (computerCard[a] < computerCard[b]) {
          return 1;
        }
        return 0;
      })[0];
    } else if (difficulty === "easy") {
      const categoryIndex = Math.floor(Math.random() * (categories.length - 1));
      return categories[categoryIndex];
    }
  };

  const selectCategory = async (event) => {
    formDisabled = true;
    const selectedCategory = event.category as
      | "battleyness"
      | "scandal"
      | "subjectivity"
      | "longevity"
      | "dynasty";

    await revealNextCard(currentPlayer === "player" ? "computer" : "player");
    await pause(1000);

    const playerScore = playerCard[selectedCategory];
    const computerScore = computerCard[selectedCategory];

    if (playerScore >= computerScore) {
      playerPack.push(computerCard);
      playerPack.push(playerCard);
      currentPlayer = "player";
      await showMessage({
        message: "YOU WIN!!",
        closeAfter: 3000,
      });
    } else {
      computerPack.push(computerCard);
      computerPack.push(playerCard);
      currentPlayer = "computer";
      await showMessage({
        message: "YOU LOSE!!",
        closeAfter: 3000,
      });
    }

    playerCardsLeft = playerPack.length;
    computerCardsLeft = computerPack.length;
    await checkForGameEnd();
    return nextMove();
  };

  const nextMove = async () => {
    formDisabled = true;

    if (computerCard || playerCard) {
      dealingComputerCard = true;
      dealingPlayerCard = true;
      await pause(1000);
      dealingComputerCard = false;
      dealingPlayerCard = false;
    }

    if (currentPlayer === "computer") {
      playerCard = null;
    } else {
      computerCard = null;
    }
    await revealNextCard(currentPlayer);

    await pause(1000);
    await showMessage({
      message:
        currentPlayer === "computer"
          ? "It's Dunstan the Fun Sponges's turn…"
          : "It's your turn. Pick a category…",
      closeAfter: 2000,
    });

    if (currentPlayer === "player") {
      formDisabled = false;
    } else {
      const chosenCategory = chooseCategory();

      await showMessage({
        message: `Dunstan choses ${chosenCategory}…`,
        closeAfter: 1000,
      });

      selectCategory({ player: "computer", category: chosenCategory });
    }
  };

  resetGame();
  nextMove();
</script>

<style>
  game-board {
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    padding-top: 1em;
    background-image: url(../baize.jpg);
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: auto;
    overflow-x: hidden;
    box-shadow: 0 -0.2em 0.5em 0.5em #2f7b2f;
    font-size: min(2.6vh, 1rem);
  }

  play-area {
    display: grid;
    grid-template-rows: auto 1fr;
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 1em;
    align-items: center;
    justify-items: center;
    max-width: 50em;
    width: 100%;
  }

  .score {
    padding: 1em;
    background: rgba(0, 0, 0, 0.7);
    color: white;
    border-radius: 1em;
    text-align: center;
    font-size: 1.4em;
  }
</style>

<game-board>
  <play-area>
    <div class="score">{playerName} {playerCardsLeft}</div>
    <div class="score">Dunstan the Fun Sponge: {computerCardsLeft}</div>
    <card-area>
      {#if dealingPlayerCard}
        <div class="card-placeholder" />
      {:else if playerCard}
        <div transition:fly={{ x: -500, y: 50, duration: 300 }}>
          <Card
            rating={playerCard}
            on:select={(event) => selectCategory({
                player: 'player',
                category: event.detail,
              })}
            clickableCategories={!formDisabled && currentPlayer === 'player'} />
        </div>
      {:else}
        <div transition:fly={{ x: -500, y: 50, duration: 300 }}>
          <Card rating={null} />
        </div>
      {/if}
    </card-area>
    <card-area>
      {#if dealingComputerCard}
        <div class="card-placeholder" />
      {:else if computerCard}
        <div transition:fly={{ x: 500, y: -50, duration: 600 }}>
          <Card rating={computerCard} clickableCategories={false} />
        </div>
      {:else}
        <div transition:fly={{ x: 500, y: -50, duration: 600 }}>
          <Card rating={null} />
        </div>
      {/if}
    </card-area>
  </play-area>
</game-board>
