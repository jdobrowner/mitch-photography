<script lang="ts">
  export let isOpen: boolean;
</script>

<style>
  .svgClosed {
    stroke-opacity: 0;
    transition: all 1s ease;
  }
  .svgOpen {
    stroke-opacity: 1;
    transition: all 1s ease 0.4s;
  }
</style>

<svg
  version="1.1"
  xmlns="http://www.w3.org/2000/svg"
  x="0px"
  y="0px"
  width="57.646px"
  height="31.008px"
  viewBox="0 0 57.646 31.008"
  enable-background="new 0 0 57.646 31.008"
>
  <polyline
    id="arrow"
    fill="none"
    stroke="#BDBDBD"
    stroke-opacity="0"
    stroke-width="2"
    stroke-miterlimit="10"
    points="0.717,30.311 28.822,1.434 56.93,30.311"
    class:svgOpen="{isOpen}"
    class:svgClosed="{!isOpen}"
  ></polyline>
</svg>
