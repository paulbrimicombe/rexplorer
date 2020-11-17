<script lang="ts">
  export let segment: string;
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

  [aria-current] {
    position: relative;
    display: inline-block;
  }

  [aria-current]::after {
    position: absolute;
    content: "";
    width: calc(100% - 1em);
    height: 2px;
    background-color: #ff785a;
    display: block;
    bottom: -1px;
  }

  a {
    text-decoration: none;
    padding: 1em 0.5em;
    display: block;
  }
</style>

<nav>
  <ul>
    <li>
      <a
        aria-current={segment === undefined ? 'page' : undefined}
        href=".">Home</a>
    </li>
    <li>
      <a
        aria-current={segment === 'monarchs' ? 'page' : undefined}
        href="monarchs">English Monarchs</a>
    </li>
    <li>
      <a
        aria-current={segment === 'consorts' ? 'page' : undefined}
        href="consorts">English Consorts</a>
    </li>
    <li>
      <a
        aria-current={segment === 'teams' ? 'page' : undefined}
        href="teams">English Royal Teams</a>
    </li>
    <li>
      <a
        aria-current={segment === 'about' ? 'page' : undefined}
        href="about">About</a>
    </li>
  </ul>
</nav>
