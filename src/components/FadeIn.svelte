<script>
  import { cubicInOut } from 'svelte/easing';
  import { fade } from 'svelte/transition';

  export let duration = 1000;
</script>

<style>
  /* No additional styles needed for the fade transition */
</style>

<div transition:fade={{ duration, easing: cubicInOut }}>
  <slot></slot>
</div>
