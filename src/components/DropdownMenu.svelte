<script lang="ts">
  import { onMount } from 'svelte';
  import { Link } from 'svelte-routing';
  import { get, writable } from 'svelte/store';
  import CloseArrow from './CloseArrow.svelte';
  import MenuItem from './MenuItem.svelte';
  //   import { photos, currentPage, redirect } from '../stores'; // Assuming you have these stores

  //   import resetCategory from '../actions/reset-category.action';
  //   import setToRecent from '../actions/set-to-recent.action';
  //   import search from '../actions/search.action';
  //   import setCurrentPage from '../actions/current-page.action';
  //   import redirectAction from '../actions/redirect.action';

  let menuClicked = false;
  let menuTimeout = false;
  let isMenuOpen = false;
  $: {
    isMenuOpen = menuClicked && !menuTimeout;
  }

  const menuClickedHandler = () => {
    menuClicked = true;
  };

  const closeMenuHandler = () => {
    menuClicked = false;
  };

  const menuTimeoutHandler = () => {
    setTimeout(() => {
      menuTimeout = false;
    }, 1500);
  };

  //   function getLinkSlug(category) {
  //     let linkSlug;
  //     if (category === 'storms' || category === 'landscapes') {
  //       linkSlug = filteredLink(category);
  //     } else {
  //       linkSlug = get(photos)[category][0].slug;
  //     }
  //     return linkSlug ? '/' + linkSlug : '/';
  //   }

  function filteredLink(category: string) {
    // const photosList = get(photos)[category];
    // const mostRecent = photosList.length - 1;
    // return photosList[mostRecent][0].slug;
  }

  function handleClick(page: string) {
    menuTimeout = true;
    closeMenuHandler();
    menuTimeoutHandler();
    // search({ term: '', show: false, mode: false, resultsMessage: '' });
    // resetCategory();
    // setToRecent(page === 'recent');
    // if (page) setCurrentPage(page);
    // if (page !== 'bio' && page !== 'info' && !get(redirect)) {
    //   redirectAction(getLinkSlug(page));
    // }
  }
</script>

<style lang="scss">
  .dropdown-menu {
    position: absolute;
    top: var(--col-1-width);
    right: var(--col-1-width);
    padding-top: 10px;
  }
  h4 {
    text-align: right;
    cursor: pointer;
    display: block;
  }
  .close-menu {
    display: flex;
    justify-content: center;
    transform: scale(0.4);
    cursor: pointer;
  }
  .close-menu:hover #arrow {
    stroke: var(--hover-white);
  }
  .menu-images {
    margin: 60px var(--col-1-width);
  }
  .menu-info {
    margin: 0 var(--col-1-width) 35px var(--col-1-width);
  }
  .dropdown {
    position: absolute;
    background-color: black;
    z-index: 10;
    top: calc(-1 * var(--col-1-width));
    right: calc(-1 * var(--col-1-width));
    transition:
      max-height 1s ease 0.2s,
      border 0.5s ease 0.2s;
  }
  .dropdownClosed {
    max-height: 0;
    overflow: hidden;
    border-bottom: 1px solid black;
  }
  .dropdownOpen {
    max-height: 800px;
    border-bottom: 1px solid var(--near-black-border);
  }
  .liClosed {
    color: transparent;
    transition: color 1s ease;
    text-align: right;
    margin: 30px 0;
  }
  .liOpen {
    color: var(--grey);
    transition: color 1s ease 0.6s;
    text-align: right;
    margin: 30px 0;
    cursor: pointer;
  }
  .svgClosed {
    stroke-opacity: 0;
    transition: all 1s ease;
  }
  .svgOpen {
    stroke-opacity: 1;
    transition: all 1s ease 0.4s;
  }

  @media (min-width: 500px) {
    .dropdown-menu {
      .menu-images {
        margin-top: calc(100vw / 8);
      }
    }
  }
  @media (min-width: 600px) {
    .dropdown-menu {
      top: 50px;
    }
  }
  @media (min-width: 750px) {
    .dropdown-menu {
      .menu-images {
        margin-top: calc(100vw / 9);
      }
    }
  }
  @media (min-width: 1025px) {
    .dropdown-menu {
      display: none;
    }
  }
</style>

<div class="dropdown-menu">
  <h4 on:click={menuClickedHandler} on:mouseenter={menuClickedHandler}>MENU</h4>
  <nav
    class="col-12 dropdown"
    class:dropdownOpen={isMenuOpen}
    class:dropdownClosed={!isMenuOpen}
    on:mouseleave={closeMenuHandler}
  >
    <ul class="menu-images">
      <MenuItem
        title="recent"
        isOpen={isMenuOpen}
        onClick={() => handleClick('recent')}
        dropdown={true}
      />
      <MenuItem
        title="storms"
        isOpen={isMenuOpen}
        onClick={() => handleClick('storms')}
        dropdown={true}
      />
      <MenuItem
        title="landscapes"
        isOpen={isMenuOpen}
        onClick={() => handleClick('landscapes')}
        dropdown={true}
      />
      <MenuItem
        title="urban"
        isOpen={isMenuOpen}
        onClick={() => handleClick('urban')}
        dropdown={true}
      />
      <MenuItem
        title="trees"
        isOpen={isMenuOpen}
        onClick={() => handleClick('trees')}
        dropdown={true}
      />
    </ul>
    <ul class="menu-info">
      <Link to="/biography"
        ><MenuItem
          title="biography"
          isOpen={isMenuOpen}
          onClick={() => handleClick('biography')}
          dropdown={true}
        /></Link
      >
      <Link to="/information"
        ><MenuItem
          title="information"
          isOpen={isMenuOpen}
          onClick={() => handleClick('information')}
          dropdown={true}
        /></Link
      >
      <div on:click={closeMenuHandler} class="close-menu">
        <CloseArrow isOpen={menuClicked} />
      </div>
    </ul>
  </nav>
</div>
