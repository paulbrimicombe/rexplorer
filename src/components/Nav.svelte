<script lang="ts">
  export let segment: string;

  let showMenu = false;
</script>

<style>
  nav {
    border-bottom: 1px solid rgba(255, 62, 0, 0.1);
    font-weight: 300;
    padding: 0 1em;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  /* clearfix */
  ul::after {
    content: "";
    display: block;
    clear: both;
  }

  li {
    display: block;
    float: left;
  }

  li:hover a::after {
    position: absolute;
    content: "";
    width: calc(100% - 1em);
    height: 2px;
    background-color: #ea6041;
    display: block;
    bottom: -1px;
  }

  [aria-current]::after {
    position: absolute;
    content: "";
    width: calc(100% - 1em);
    height: 2px;
    background-color: #ea6041;
    display: block;
    bottom: -1px;
  }

  a {
    text-decoration: none;
    padding: 0.75em 0.5em;
    position: relative;
    display: inline-block;
  }

  #menu-button {
    display: none;
  }

  @media (max-width: 750px) {
    #menu-button {
      display: block;
      border-left: 1px solid rgb(238, 238, 238);
    }

    li {
      float: none;
      width: 100%;
      box-sizing: content-box;
    }

    li > a {
      width: 100%;
    }

    ul {
      --opacity: 0;
      --pointer-events: none;
      transition: opacity 0.3s;
      box-shadow: rgba(0, 0, 0, 0.5) 0.1em 0.1em 0.1em;
      border-left: 1px solid rgb(238, 238, 238);
      display: block;
      opacity: var(--opacity);
      pointer-events: var(--pointer-events);
      position: absolute;
      top: 3rem;
      z-index: 1000;
      background-color: white;
      padding-right: 1em;
      padding-bottom: 0.5em;
    }

    blocker {
      display: none;
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: 50;
      top: 0;
      left: 0;
    }
  }
</style>

<nav>
  <a
    href="."
    id="menu-button"
    class="icon"
    style={!showMenu ? "border-left: 1px solid #fff" : ""}
    on:click|preventDefault={() => (showMenu = !showMenu)}>
    MENU
  </a>
  <blocker style={showMenu ? 'display: block': ''} on:click={() => showMenu = false} on:keypress={() => showMenu = false}></blocker>
  <ul style="--opacity: {showMenu ? 100 : 0}; --pointer-events: {showMenu ? 'all' : 'none'}">
    <li>
      <a
        aria-current={segment === undefined ? 'page' : undefined}
        on:click={() => (showMenu = false)}
        href=".">Home</a>
    </li>
    <li>
      <a
        aria-current={segment === 'monarchs' ? 'page' : undefined}
        on:click={() => (showMenu = false)}
        href="monarchs">English Monarchs</a>
    </li>
    <li>
      <a
        aria-current={segment === 'consorts' ? 'page' : undefined}
        on:click={() => (showMenu = false)}
        href="consorts">English Consorts</a>
    </li>
    <li>
      <a
        aria-current={segment === 'teams' ? 'page' : undefined}
        on:click={() => (showMenu = false)}
        href="teams">English Royal Teams</a>
    </li>
    <li>
      <a
        aria-current={segment === 'game' ? 'page' : undefined}
        on:click={() => (showMenu = false)}
        href="game">Game!</a>
    </li>
    <li>
      <a
        aria-current={segment === 'about' ? 'page' : undefined}
        on:click={() => (showMenu = false)}
        href="about">About</a>
    </li>
  </ul>
</nav>
