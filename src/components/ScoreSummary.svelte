<script lang="ts">
  import type Rating from "../routes/Rating";
  import { afterUpdate, beforeUpdate, createEventDispatcher } from "svelte";
  import { scale } from "svelte/transition";

  const dispatch = createEventDispatcher();

  export let rating: Rating;
  export let scoreHighlight: string | undefined = undefined;
  export let style: string = "";

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
  button {
    border-radius: 1.5em;
    display: flex;
    align-items: center;
    justify-items: center;
    padding: 0.7em;
    border: none;
    background: none;
    cursor: pointer;
    border-radius: 0.2em;
  }

  button:hover {
    background: rgba(0, 0, 0, 0.1);
  }

  total {
    border-radius: 50%;
    width: 3em;
    height: 3em;
    font-size: 1em;
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
    width: 1.6em;
    transform: rotate(-45deg);
  }

  name {
    font-size: 1.5em;
    margin: 0 0.5em;
    text-align: left;
    flex: 1;
    position: relative;
  }

  badge {
    position: absolute;
    left: -1em;
    top: -0.5em;
    z-index: 10;
  }

  detail {
    flex: 1;
    text-align: left;
    display: flex;
    align-items: center;
  }

  breakdown {
    width: 5em;
    height: 2.2em;
    display: inline-flex;
    flex-direction: column;
    border-bottom: 1px solid darkslategray;
    border-left: 1px solid darkslategray;
  }

  breakdown-row {
    width: 100%;
    display: flex;
    flex: 1;
    align-items: center;
  }

  highlight-bar {
    margin-left: 0.8em;
    width: 5em;
    text-align: left;
    border-left: solid 1px darkslategray;
    border-bottom: solid 1px darkslategray;
    display: flex;
    align-items: center;
    height: 2.2em;
  }

  highlight-bar > bar {
    font-size: 1.1em;
    line-height: 1.4em;
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

  .battleyness {
    background-color: #FF785A;
  }
  .scandal {
    background-color: #AF4D98;
  }
  .subjectivity {
    background-color: #5073A5;
  }
  .longevity {
    background-color: #531320;
  }
  .dynasty {
    background-color: #08BDBD;
  }
</style>

<button tabindex="0" on:click|preventDefault|stopPropagation={() => dispatch('select', rating)} style={style}>
  <total>{rating.total}</total>
  <name>
    {#if rating.rexFactor}
      <badge><img src="/crown.svg" alt="Rex Factor winner" /></badge>
    {/if}
    {rating.name}
  </name>
  <detail>
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
    {#if scoreHighlight && scoreHighlight !== 'index' && scoreHighlight !== 'total'}
      <highlight-bar transition:scale={{ duration: 1000 }}>
        <bar
          style={`width: ${showBars ? (100 * rating[scoreHighlight]) / highlightMax : 0}%;`}
          class={scoreHighlight}>
          &nbsp;{rating[scoreHighlight]}
        </bar>
      </highlight-bar>
    {/if}
  </detail>
  <slot></slot>
</button>
