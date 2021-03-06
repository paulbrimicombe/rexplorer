<script lang="ts">
  import type Rating from "../types/Rating";
  import "../routes/_common-styles.svelte";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  export let rating: Rating | null;
  export let clickableCategories = false;

  const selectCategory = (
    category:
      | "battleyness"
      | "scandal"
      | "subjectivity"
      | "longevity"
      | "dynasty"
  ) => {
    dispatch("select", category);
  };
</script>

<style>
  card {
    box-shadow: 3px 3px 3px 1px rgba(0, 0, 0, 0.5);
    box-sizing: border-box;
    display: flex;
    color: black;
    flex-direction: row;
    border-radius: 1em;
    width: 20em;
    height: 30em;
    background: white;
    background-size: cover;
    position: relative;
    margin-bottom: 1.5em;
    margin-right: 0.5em;
  }

  card::after {
    content: "";
    position: absolute;
    border-radius: 1em;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(../card.jpg);
    mix-blend-mode: multiply;
    background-size: cover;
    pointer-events: none;
  }

  content {
    padding: 0.2em;
    display: flex;
    flex-direction: column;
    flex: 1;
    position: relative;
  }

  scores {
    display: flex;
    flex-direction: column;
    padding: 0.2em 0;
    margin: 0 0.4em;
  }

  name {
    margin: 0;
    padding: 0;
    border-top-left-radius: inherit;
    border-bottom-left-radius: inherit;
    background: #c0c0c0;
    background: linear-gradient(to bottom, #c0c0c0 0%, #b1b1b1 100%);
    border-right: 1px solid #a2a2a2;
    font-size: 1.5em;
    writing-mode: vertical-rl;
  }

  name > span {
    padding: 0.7em 0.2em;
    display: block;
  }

  name > span > span:last-child {
    display: none;
  }

  name img {
    width: 2em;
  }

  total {
    position: absolute;
    right: 0.5em;
    bottom: 40%;
    border-radius: 50%;
    width: 3em;
    height: 3em;
    font-size: 1.5em;
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
  }

  portrait {
    flex: 1;
    background-size: cover;
    background-position: center top;
    box-shadow: 0 0 0.5em 0.5em white inset;
  }

  portraits {
    flex: 1;
    display: flex;
    margin: 0 0.2em;
  }

  button {
    margin: 0.1em 0;
    font-size: 1.5em;
    background-color: rgba(0, 0, 0, 0.3);
    border: none;
    text-align: left;
    padding: 0;
    line-height: normal;
  }

  bar {
    border-top-right-radius: 0.3em;
    border-bottom-right-radius: 0.3em;
    display: inline-block;
    min-width: 1px;
    transition: width 1s;
    white-space: nowrap;
    color: white;
    border: 1px solid rgba(0, 0, 0, 0);
  }

  .clickableCategories {
    cursor: pointer;
  }

  .card-back {
    background: repeating-linear-gradient(
        to top left,
        beige 0,
        beige 2em,
        moccasin 2em,
        moccasin 4em,
        wheat 4em,
        wheat 6em
      ),
      repeating-linear-gradient(
        to left,
        white 0,
        white 2em,
        wheat 2em,
        wheat 4em,
        beige 4em,
        beige 6em
      ),
      white;

    background-blend-mode: multiply;
  }
</style>

<div>
  {#if !rating}
    <card class="card-back" />
  {:else}
    <card>
      <name>
        <span>
          {#each rating.name as name, index}
            {#if rating.rexFactor[index]}
              <img src="crown.svg" alt="Rex Factor winner" />
            {/if}
            <span>{name}</span>
            <span> & </span>
          {/each}
        </span>
      </name>
      <content>
        <portraits>
          {#each rating.name as name}
            <portrait style="background-image: url('portraits/{name}.jpg')" />
          {/each}
        </portraits>
        <total>{rating.total}</total>
        <scores>
          <button
            on:click={() => selectCategory('battleyness')}
            disabled={!clickableCategories}
            class:clickableCategories>
            <bar
              style={`width: ${(100 * rating.battleyness) / 20}%`}
              class="battleyness">
              &nbsp;Battleyness
              {rating.battleyness}
            </bar>
          </button>
          <button
            on:click={() => selectCategory('scandal')}
            disabled={!clickableCategories}
            class:clickableCategories>
            <bar
              style={`width: ${(100 * rating.scandal) / 20}%`}
              class="scandal">
              &nbsp;Scandal
              {rating.scandal}
            </bar>
          </button>
          <button
            on:click={() => selectCategory('subjectivity')}
            disabled={!clickableCategories}
            class:clickableCategories>
            <bar
              style={`width: ${(100 * rating.subjectivity) / 20}%`}
              class="subjectivity">
              &nbsp;Subjectivity
              {rating.subjectivity}
            </bar>
          </button>
          <button
            on:click={() => selectCategory('longevity')}
            disabled={!clickableCategories}
            class:clickableCategories>
            <bar
              style={`width: ${(100 * rating.longevity) / 20}%`}
              class="longevity">
              &nbsp;Longevity
              {rating.longevity}
            </bar>
          </button>
          <button
            on:click={() => selectCategory('dynasty')}
            disabled={!clickableCategories}
            class:clickableCategories>
            <bar
              style={`width: ${(100 * rating.dynasty) / 20}%`}
              class="dynasty">
              &nbsp;Dynasty
              {rating.dynasty}
            </bar>
          </button>
        </scores>
      </content>
    </card>
  {/if}
</div>
