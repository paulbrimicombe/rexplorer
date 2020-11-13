<script lang="ts">
  import type Rating from "../routes/Rating";
  export let rating: Rating;

  let displayRating: Rating = {
    ...rating,
    battleyness: 0,
    scandal: 0,
    subjectivity: 0,
    longevity: 0,
    dynasty: 0,
  };

  setTimeout(() => (displayRating = rating), 100);
</script>

<style>
  summary {
    display: flex;
    align-items: center;
    justify-items: center;
    margin: 0.7em 0 0.7em 0;
  }

  total {
    border-radius: 10%;
    width: 3em;
    height: 3em;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    margin-right: 1em;
  }

  img {
    width: 1.6em;
    transform: rotate(-45deg);
  }

  name {
    position: relative;
    font-size: 1.5em;
    margin: 0 0.5em;
  }

  badge {
    position: absolute;
    left: -1em;
    top: -0.5em;
    z-index: 10;
  }

  breakdown {
    width: 5em;
    height: 2em;
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

  bar {
    border-top-right-radius: 20%;
    border-bottom-right-radius: 20%;
    display: inline-block;
    height: 3px;
    min-width: 1px;
    transition: width 1s;
  }

  .battleyness {
    background-color: crimson;
  }
  .scandal {
    background-color: cornflowerblue;
  }
  .subjectivity {
    background-color: chocolate;
  }
  .longevity {
    background-color: mediumpurple;
  }
  .dynasty {
    background-color: cadetblue;
  }
</style>

<summary>
  <total>{rating.total}</total>
  <name>
    {#if rating.rexFactor}
      <badge><img src="/crown.svg" alt="Rex Factor winner" /></badge>
    {/if}
    {rating.name}
  </name>
  <breakdown>
    <breakdown-row>
      <bar
        style={`width: ${(100 * displayRating.battleyness) / 20}%`}
        class="battleyness" />
    </breakdown-row>
    <breakdown-row>
      <bar style={`width: ${(100 * displayRating.scandal) / 20}%`} class="scandal" />
    </breakdown-row>
    <breakdown-row>
      <bar
        style={`width: ${(100 * displayRating.subjectivity) / 20}%`}
        class="subjectivity" />
    </breakdown-row>
    <breakdown-row>
      <bar
        style={`width: ${(100 * displayRating.longevity) / 20}%`}
        class="longevity" />
    </breakdown-row>
    <breakdown-row>
      <bar style={`width: ${(100 * displayRating.dynasty) / 20}%`} class="dynasty" />
    </breakdown-row>
  </breakdown>
</summary>
