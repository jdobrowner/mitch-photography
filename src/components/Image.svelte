<script>
  import { onMount } from 'svelte';

  export let src = '';
  export let alt = '';
  export let className = '';

  let loaded = false;
  let initialTimeout = false;

  function onImageLoad() {
    loaded = true;
  }

  onMount(() => {
    let img = new Image();
    img.onload = onImageLoad;
    img.src = src;

    setTimeout(() => {
      initialTimeout = true;
    }, 10);
  });
</script>

<style>
  .image {
    transition: opacity 0.3s ease-in-out;
  }
  .image-loaded {
    opacity: 1;
  }
</style>

{#if loaded && initialTimeout}
  <img {src} {alt} class="{className} image image-loaded" />
{:else}
  <img {src} {alt} class="{className} image" />
{/if}
