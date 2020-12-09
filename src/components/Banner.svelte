<script lang="ts">
  export let imageSize = 64;
  export let imagePath: string;
  export let imageAlt: string;
  export let title: string;
  export let hoverable: boolean = false;
  export let style: string = "";
  export let alignment: "left" | "centre" = "centre";

  import vellum from "../images/vellum.jpg";
</script>

<style>
  h1 {
    margin-bottom: 0.4em;
    font-size: 2rem;
    font-family: uncial, Luminari, "Brush Script MT", "Bradley Hand";
    box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 10px inset;
    background-color: antiquewhite;
  }

  div {
    display: grid;
    align-items: center;
    justify-content: center;
    grid-gap: 0.5em;
    padding: 0.4em;
  }

  img {
    box-shadow: 0 0 2px 2px white;
    margin-left: 0.5em;
  }

  div > p {
    margin: 0;
  }

  div > p::first-letter {
    font-size: 2em;
    line-height: 0.5em;
  }

  .hoverable:hover {
    background-color: #00000011;
  }
</style>

<h1 style="background: url({vellum}); {style}">
  <div
    class={hoverable ? 'hoverable' : ''}
    style="grid-template-columns: {alignment === 'left' ? 'auto 1fr' : 'auto auto'}">
    <img width={imageSize} height={imageSize} src={imagePath} alt={imageAlt} />
    <p>{title}</p>
  </div>
</h1>
