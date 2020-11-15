<script lang="ts">
  import { getContext } from "svelte";
  import { fade } from "svelte/transition";

  import type Rating from "../routes/Rating";
  import type Monarch from "../routes/Monarch";
  import Card from "./Card.svelte";
  import ScoreSummary from "./ScoreSummary.svelte";

  export let scores: Monarch[];

  let sortField = null;
  let showConsorts = false;

  const modal: any = getContext("simple-modal");

  const showCard = (rating: Rating) => (event: CustomEvent) => {
    modal.open(
      Card,
      { rating },
      {
        styleWindow: {
          width: "fit-content",
          background: "rgba(0,0,0,0)",
        },
        styleContent: {
          padding: 0,
        },
      }
    );
  };

  const sortRatings = (
    event: FocusEvent & { currentTarget: HTMLSelectElement }
  ) => {
    const sortField = event.currentTarget.value;

    if (sortField) {
      scores = scores.sort((a, b) => {
        if (a[sortField] === b[sortField]) {
          return 0;
        } else {
          if (sortField === "index") {
            return a[sortField] > b[sortField] ? 1 : -1;
          }
          return a[sortField] > b[sortField] ? -1 : 1;
        }
      });
    }
  };
</script>

<style>
  form {
    border-bottom: 1px solid darkslategray;
    padding: 0.5em;
    margin: 0 0 0.2em 0;
    display: flex;
    justify-content: start;
  }

  field {
    padding: 0 0.5em;
  }

  monarch {
    display: flex;
    flex-direction: column;
  }

  monarch:nth-child(even) {
    background-color: rgba(0, 0, 0, 0.05);
  }

  consorts {
    flex: 2;
    display: flex;
    flex-direction: column;
  }
</style>

<monarchs>
  <form>
    <field>
      <label for="sort-field">Sort</label>
      <select
        id="sort-field"
        bind:value={sortField}
        on:change={sortRatings}
        on:blur={sortRatings}>
        <option value="index">Chronological</option>
        <option value="total">Total score</option>
        <option value="battleyness">Battleyness</option>
        <option value="scandal">Scandal</option>
        <option value="subjectivity">Subjectivity</option>
        <option value="longevity">Longevity</option>
        <option value="dynasty">Dynasty</option>
      </select>
    </field>
    <field>
      <label for="show-consorts">Show consorts?</label>
      <input type="checkbox" id="show-consorts" bind:checked={showConsorts} />
    </field>
  </form>
  <monarch-list>
    {#each scores as monarch}
      <monarch>
        <ScoreSummary
          rating={monarch}
          scoreHighlight={sortField}
          on:select={showCard(monarch)}>
          {#if showConsorts}
            <consorts transition:fade={{ duration: 400 }}>
              {#each monarch.consorts as consort}
                <ScoreSummary
                  rating={consort}
                  style="font-size: 1em;"
                  on:select={showCard(consort)} />
              {/each}
            </consorts>
          {/if}
        </ScoreSummary>
      </monarch>
    {/each}
  </monarch-list>
</monarchs>
