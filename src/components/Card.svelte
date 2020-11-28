<script lang="ts">
  import type Rating from "../types/Rating";
  export let rating: Rating;
</script>

<style>
  card {
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    border-radius: 1rem;
    width: 20em;
    height: 30em;
    background: white;
    background-size: cover;
  }

  content {
    padding: 0.2em;
    display: flex;
    flex-direction: column;
    flex: 1;
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
    border-top-left-radius: 1rem;
    border-bottom-left-radius: 1rem;
    background: #c0c0c0;
    background: linear-gradient(to bottom, #c0c0c0 0%, #b1b1b1 100%);
    border: 1px solid #a2a2a2;
    box-shadow: inset 0 1px 0 #cfcfcf;
    font-size: 1.5rem;
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
    font-size: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #d4af37;
    background: linear-gradient(to bottom, #d4af37 0%, #c5a028 100%);
    border: 1px solid #b69119;
    box-shadow: inset 0 1px 0 #e3be46;
  }

  portrait {
    width: 95%;
    flex: 1;
    background-size: cover;
    background-position: center top;
    box-shadow: 0 0 0.5em 0.5em white inset;
  }

  score {
    margin: 0.1em 0;
    font-size: 1.5rem;
    background-color: rgba(0, 0, 0, 0.3);
  }

  bar {
    border-top-right-radius: 0.3em;
    border-bottom-right-radius: 0.3em;
    display: inline-block;
    min-width: 1px;
    transition: width 1s;
    white-space: nowrap;
    color: white;
  }
</style>

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
    {#each rating.name as name}
      <portrait style="background-image: url('portraits/{name}.webp')" />
    {/each}
    <total>{rating.total}</total>
    <scores>
      <score>
        <bar
          style={`width: ${(100 * rating.battleyness) / 20}%`}
          class="battleyness">
          &nbsp;Battleyness
          {rating.battleyness}
        </bar>
      </score>
      <score>
        <bar style={`width: ${(100 * rating.scandal) / 20}%`} class="scandal">
          &nbsp;Scandal
          {rating.scandal}
        </bar>
      </score>
      <score>
        <bar
          style={`width: ${(100 * rating.subjectivity) / 20}%`}
          class="subjectivity">
          &nbsp;Subjectivity
          {rating.subjectivity}
        </bar>
      </score>
      <score>
        <bar
          style={`width: ${(100 * rating.longevity) / 20}%`}
          class="longevity">
          &nbsp;Longevity
          {rating.longevity}
        </bar>
      </score>
      <score>
        <bar style={`width: ${(100 * rating.dynasty) / 20}%`} class="dynasty">
          &nbsp;Dynasty
          {rating.dynasty}
        </bar>
      </score>
    </scores>
  </content>
</card>
