<script lang="ts">
  export let title = '';
  export let onClick = () => {};
  export let isOpen = false;
  export let isHighlighted = false;
  export let dropdown = false;
</script>

<style lang="scss">
  li.dropdown {
    text-align: right;
    margin: 30px 0;
    text-transform: uppercase;
    transition: color 1s ease 0.6s;
    color: transparent;
  }
  li.dropdown.isOpen {
    color: var(--grey);
    transition: color 1s ease 0.6s;
    cursor: pointer;
  }

  li.sidebar {
    margin: 30px 0;
    text-transform: uppercase;
    transition: color 1s ease;
    color: transparent;
  }
  li.sidebar.isOpen {
    color: var(--grey);
    transition: color 1s ease 0.2s;
    cursor: pointer;
  }

  .isHighlighted {
    color: var(--off-white);
  }
</style>

<li
  class:dropdown
  class:sidebar={!dropdown}
  class:isHighlighted
  class:isOpen
  on:click={onClick}
>
  {title}
</li>
