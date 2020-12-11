<script context="module" lang="ts">
  export async function preload() {
    const res = await this.fetch(`data/monarchs.json`);
    const data = (await res.json()) as { scores: Monarch[] };

    if (res.status === 200) {
      return data;
    } else {
      this.error(res.status, res.statusMessage);
    }
  }
</script>

<script lang="ts">
  import Modal from "svelte-simple-modal";

  import { fade } from "svelte/transition";
  import Game from "../components/game/Game.svelte";
  import type Monarch from "../types/Monarch";
  import type Rating from "../types/Rating";

  export let scores: Rating[];
</script>

<Modal>
  <div in:fade={{ delay: 300, duration: 200 }} out:fade={{ duration: 200 }}>
    <Game {scores} />
  </div>
</Modal>
