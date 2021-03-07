<script lang="ts" context="module">
  type RatingsPageOptions = {
    showLinkedRatings: boolean;
    nameFilter: string | null;
    sortField: string | null;
  };

  export const getFilterFromQuery = (): RatingsPageOptions => {
    if (typeof window === "undefined") {
      return {
        showLinkedRatings: false,
        nameFilter: null,
        sortField: null,
      };
    }
    const query = window.location.search
      .substring(1)
      .split("&")
      .map((entry) => entry.split("=").map(decodeURIComponent));

    return query.reduce((result, [key, value]) => {
      if (key === "showLinkedRatings") {
        return {
          ...result,
          [key]: value === "true",
        };
      }
      return {
        ...result,
        [key]: value,
      };
    }, {} as RatingsPageOptions);
  };

  export const setQueryFromFilter = (
    filter: Record<string, string | boolean>
  ) => {
    const newQueryString = Object.entries(filter)
      .filter(
        ([, value]) =>
          value !== "" &&
          value !== undefined &&
          value !== null &&
          value !== false
      )
      .map(([key, value]) => {
        return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
      }, [])
      .join("&");
    const baseUrl = window.location.href.split("?")[0];
    const newUrl = newQueryString ? baseUrl + `?${newQueryString}` : baseUrl;

    window.history.replaceState({ path: newUrl }, "", newUrl);
  };
</script>

<script lang="ts">
  import type RatedPerson from "../types/RatedPerson";
  import Banner from "./Banner.svelte";
  import RatingsTable from "./RatingsTable.svelte";
  import { beforeUpdate, createEventDispatcher, getContext } from "svelte";
  import { slide } from "svelte/transition";
  import HelpPopup from "./HelpPopup.svelte";

  const dispatch = createEventDispatcher();
  const modal: any = getContext("simple-modal");

  export let ratingName: string;
  export let linkedRatingName: string;
  export let ratingImageSrc: string;
  export let ratingImageAlt: string;
  export let scores: RatedPerson[] = [];
  export let sortField: string | null = null;
  export let showLinkedRatings: boolean = false;
  export let nameFilter: string | null = null;
  export let linkSymbol: string = "⚭";

  let displayScores: RatedPerson[];
  let highlightField = null;

  beforeUpdate(() => {
    filterRatings();
    sortRatings();

    highlightField =
      sortField === "index" || sortField === "total" ? null : sortField;
  });

  const showHelp = () => {
    modal.open(
      HelpPopup,
      {
        messages: [
          "Click on an entry to show their score card.",
          "A crown indicates a Rex Factor winner.",
          "Use the filters and sort order to explore the scores.",
          "The current view can be shared by copying the URL in the browser address bar.",
        ],
      },
      {
        styleWindow: {
          background: "rgba(0,0,0,0.8)",
          width: "fit-content",
        },
        styleContent: {},
        transitionWindow: slide,
        styleCloseButton: {
          cursor: "pointer",
          borderRadius: "30%",
          boxShadow: "0 0 0 1px #00000033",
        },
      }
    );
  };

  const filterRatings = () => {
    if (!nameFilter) {
      displayScores = scores || [];
      return;
    }

    const lowerCaseFilter = nameFilter.toLocaleLowerCase();
    displayScores = scores.filter((score) =>
      score.name.join(" ").toLocaleLowerCase().includes(lowerCaseFilter)
    );
  };

  const sortRatings = () => {
    if (!sortField) {
      return;
    }
    displayScores = displayScores.sort((a, b) => {
      if (a[sortField] === b[sortField]) {
        return 0;
      } else {
        if (sortField === "index") {
          return a[sortField] > b[sortField] ? 1 : -1;
        }
        return a[sortField] > b[sortField] ? -1 : 1;
      }
    });
  };

  const filterStateChanged = () => {
    dispatch("change", {
      sortField,
      showLinkedRatings,
      nameFilter,
    });
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

  #name-filter {
    width: 100%;
    max-width: 10em;
  }

  button {
    border-radius: 50%;
    width: 1.8em;
    height: 1.8em;
    line-height: 0;
    box-sizing: border-box;
    text-align: center;
    display: inline-block;
    background-color: #5073a5;
    color: white;
    font-weight: bold;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.8) 0px 0px 1px 1px;
    border-color: transparent;
    border-style: outset;
    transition: transform 0.2s cubic-bezier(0.25, 0.1, 0.25, 1) 0s, background 0.2s cubic-bezier(0.25, 0.1, 0.25, 1) 0s;
  }

  button:hover {
    background-color: #1f4b88;
  }
</style>

<Banner
  title={ratingName}
  imagePath={ratingImageSrc}
  imageAlt={ratingImageAlt}
  imageSize={64}
/>

<form on:submit|preventDefault>
  <button id="help" type="button" title="Help" on:click={showHelp}>?</button>
  <field>
    <label for="sort-field">Sort</label>
    <select
      id="sort-field"
      bind:value={sortField}
      on:blur|preventDefault|stopPropagation={filterStateChanged}
      on:change|preventDefault|stopPropagation={filterStateChanged}
    >
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
    <label for="show-linked-ratings">
      Show
      {linkedRatingName}?
      <input
        type="checkbox"
        id="show-linked-ratings"
        bind:checked={showLinkedRatings}
        on:change|preventDefault|stopPropagation={filterStateChanged}
      />
    </label>
  </field>
  <field>
    <label for="name-filter"> Filter by name </label>
    <input
      type="text"
      id="name-filter"
      bind:value={nameFilter}
      on:select|preventDefault
      on:input|preventDefault|stopPropagation={filterStateChanged}
    />
  </field>
</form>
<RatingsTable
  scores={displayScores}
  {showLinkedRatings}
  {highlightField}
  {linkSymbol}
/>
