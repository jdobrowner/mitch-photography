<script lang="ts">
  export let title = '';
  export let onClick = () => {};
  export let isOpen = false;
  export let isHighlighted = false;
</script>

<style lang="scss">
  li {
    text-align: right;
    margin: 30px 0;
    text-transform: uppercase;
    transition: color 1s ease 0.6s;
    color: transparent;
  }
  .isOpen {
    color: var(--grey);
    transition: color 1s ease 0.6s;
    cursor: pointer;
  }
  .isHighlighted {
    color: var(--off-white);
  }
</style>

<li class:isHighlighted class:isOpen on:click={onClick}>
  {title}
</li>
