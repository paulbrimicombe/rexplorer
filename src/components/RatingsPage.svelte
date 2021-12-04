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
  import helpIcon from "./help.svg";
  import shareIcon from "./share.svg";

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

  const share = async () => {
    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(window.location.href)
        .catch((error) => console.error("Failed to copy to clipboard", error));
    } else {
      const dummy = document.createElement("input");
      document.body.appendChild(dummy);
      dummy.value = window.location.href;
      dummy.select();
      document.execCommand("copy");
      document.body.removeChild(dummy);
    }

    modal.open(
      HelpPopup,
      {
        messages: ["Rexploration URL copied to clipboard"],
      },
      {
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
        },
      }
    );

    setTimeout(() => modal.close(), 1000);
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

<Banner
  title={ratingName}
  imagePath={ratingImageSrc}
  imageAlt={ratingImageAlt}
  imageSize={64}
/>

<form on:submit|preventDefault>
  <field class="button-field">
    <button id="help" type="button" title="Help" on:click={showHelp}
      ><img src={helpIcon} alt="Help" /></button
    >
    <button id="share" type="button" title="Share" on:click={share}
      ><img src={shareIcon} alt="Share" /></button
    >
  </field>
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

<style>
  form {
    border-bottom: 1px solid darkslategray;
    padding: 0.5em;
    margin: 0 0 0.2em 0;
    display: flex;
    justify-content: start;
    align-items: center;
  }

  field {
    padding: 0 0.5em;
  }

  .button-field {
    padding: 0 0.5em 0 0;
    border-right: 1px solid #ea604166;
  }

  #name-filter {
    width: 100%;
    max-width: 10em;
  }

  button {
    padding: 0;
    font-size: 1.1em;
    width: 1.5em;
    height: 1.5em;
    line-height: 0;
    text-align: center;
    margin: 0.1em 0;
  }

  button > img {
    max-width: 0.9em;
    max-height: 1em;
  }
</style>
