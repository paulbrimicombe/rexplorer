<script lang="ts">
  import { getContext } from "svelte";

  import type Rating from "../routes/Rating";
  import Card from "./Card.svelte";
  import ScoreSummary from "./ScoreSummary.svelte";
  export let scores: Rating[];

  const modal: any = getContext("simple-modal");

  const showCard = (rating: Rating) => {
    modal.open(
      Card,
      { rating },
      {
        styleWindow: {
          width: "fit-content",
          background: 'rgba(0,0,0,0)'
        },
        styleContent: {
          padding: 0,
        },
      }
    );
  };

  setTimeout(() => {
    scores = scores.sort((a, b) => {
      if (a.battleyness === b.battleyness) {
        return 0
      } else {
        return a.battleyness > b.battleyness ? -1 : 1
      }
    })
  }, 2000)
</script>

<monarchs>
  {#each scores as monarch}
    <ScoreSummary rating={monarch} on:select={() => showCard(monarch)} />
  {/each}
</monarchs>
