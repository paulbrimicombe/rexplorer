<script lang="ts">
  import type Rating from "../types/Rating";
  import { afterUpdate } from "svelte";

  export let rating: Rating;

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
  breakdown {
    width: 5em;
    height: 30px;
    display: inline-flex;
    flex-direction: column;
    border-bottom: 1px solid darkslategray;
    border-left: 1px solid darkslategray;
    margin: 0.5em;
  }

  breakdown-row {
    width: 100%;
    display: flex;
    flex: 1;
    align-items: center;
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

<breakdown>
  <breakdown-row>
    <bar
      style={`width: ${showBars ? (100 * rating.battleyness) / 20 : 0}%`}
      class="battleyness">
      &nbsp;
    </bar>
  </breakdown-row>
  <breakdown-row>
    <bar
      style={`width: ${showBars ? (100 * rating.scandal) / 20 : 0}%`}
      class="scandal">
      &nbsp;
    </bar>
  </breakdown-row>
  <breakdown-row>
    <bar
      style={`width: ${showBars ? (100 * rating.subjectivity) / 20 : 0}%`}
      class="subjectivity">
      &nbsp;
    </bar>
  </breakdown-row>
  <breakdown-row>
    <bar
      style={`width: ${showBars ? (100 * rating.longevity) / 20 : 0}%`}
      class="longevity">
      &nbsp;
    </bar>
  </breakdown-row>
  <breakdown-row>
    <bar
      style={`width: ${showBars ? (100 * rating.dynasty) / 20 : 0}%`}
      class="dynasty">
      &nbsp;
    </bar>
  </breakdown-row>
</breakdown>
