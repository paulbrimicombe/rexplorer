<script lang="ts">
  import type Rating from "../types/Rating";
  import { afterUpdate, beforeUpdate } from "svelte";

  export let rating: Rating;
  export let scoreHighlight: string | undefined = undefined;

  let highlightMax;
  beforeUpdate(() => {
    highlightMax = scoreHighlight === "total" ? 100 : 20;
  });

  let showBars = false;

  afterUpdate(() => {
    if (!showBars) {
      setTimeout(() => {
        showBars = true;
      }, 100);
    }
  });
</script>

<style>
  highlight-bar {
    margin: 0.5em;
    width: 5em;
    text-align: left;
    border-left: solid 1px darkslategray;
    border-bottom: solid 1px darkslategray;
    display: flex;
    align-items: center;
    height: 30px;
  }

  highlight-bar > bar-background > bar {
    font-size: 1.1rem;
    line-height: 1.4em;
  }

  bar-background {
    background-color: rgba(0, 0, 0, 0.3);
    width: 100%;
  }

  bar {
    border-top-right-radius: 2px;
    border-bottom-right-radius: 2px;
    display: inline-block;
    min-width: 1px;
    transition: width 1s;
    font-size: 3px;
    white-space: nowrap;
    color: #fff;
    font-weight: bold;
  }
</style>

<highlight-bar>
  <bar-background>
    <bar
      style={`width: ${showBars ? (100 * rating[scoreHighlight]) / highlightMax : 0}%;`}
      class={scoreHighlight}>
      &nbsp;{rating[scoreHighlight]}
    </bar>
  </bar-background>
</highlight-bar>
