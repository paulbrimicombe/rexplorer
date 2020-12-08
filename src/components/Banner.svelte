<script lang="ts">
  export let imageSize = 64;
  export let imagePath: string;
  export let imageAlt: string;
  export let title: string;
  export let hoverable: boolean = false;
  export let style: string = "";
</script>

<style>
  h1 {
    padding: 0.4em;
    display: grid;
    align-items: center;
    justify-content: center;
    grid-template-columns: auto auto;
    grid-gap: 0.5em;
    font-size: 2rem;
    font-family: uncial, Luminari, "Brush Script MT", "Bradley Hand";
    box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 10px inset;
    background-color: antiquewhite;
    background: url('/vellum.png');
  }

  img {
    box-shadow: 0 0 2px 2px white;
  }

  h1 > p {
    margin: 0;
  }

  h1 > p::first-letter {
    font-size: 2em;
    line-height: 0.5em;
  }

  .hoverable:hover {
    background-color: #ebddcd;
  }
</style>

<h1 class={hoverable ? 'hoverable' : ''} style="{style}">
  <img width={imageSize} height={imageSize} src={imagePath} alt={imageAlt} />
  <p>{title}</p>
</h1>
