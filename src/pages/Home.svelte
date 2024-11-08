<script>
  import { onMount, onDestroy } from 'svelte';
  import Image from '../components/Image.svelte';
  import FadeIn from '../components/FadeIn.svelte';
  import { homePagePhotograph } from '../store';

  onMount(() => {
    // const timer1 = setTimeout(() => {
    //   timeout = true;
    // }, 100);
    // const timer2 = setTimeout(() => {
    //   if (!$imageLoadedStore) {
    //     imageLoaded.set(true);
    //   }
    // }, 1000);
    // return () => {
    //   clearTimeout(timer1);
    //   clearTimeout(timer2);
    //   imageLoaded.set(false);
    // };
  });

  //   $: if (redirect) {
  //     fadeOutComponent();
  //     setTimeout(() => {
  //       redirectSlug = redirect;
  //     }, 300);
  //   }
</script>

<style>
  .fade-out {
    opacity: 0;
    transition: opacity 300ms;
  }
</style>

<svelte:head>
  <title>Home</title>
</svelte:head>

<div class="home">
  <div class="cover-image-div col-10">
    <!-- {#if timeout}
      <Image src={content.coverImageURL} alt={content.imageTitle} on:load={handleImageLoad} />
    {/if}
    {#if isImageLoaded}
      <FadeIn>
        <p class="p-quote col-8">{content.quote}</p>
        <p class="p-quote col-8 quote-author">{content.quoteAuthor}<span>{content.quoteDate}</span></p>
      </FadeIn>
    {/if}
  </div>

  {#if content.imageTitle && content.coverImageURL && awards}
    {PersonSchema({ imageTitle: content.imageTitle, coverImageURL: content.coverImageURL, awards })}
  {/if}

  {@html redirect()} -->
  </div>
</div>
