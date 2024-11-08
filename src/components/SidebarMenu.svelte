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
  let contactOpen = false;
  $: {
    isMenuOpen = menuClicked && !menuTimeout;
  }

  const menuClickedHandler = () => {
    menuClicked = true;
  };

  const closeMenuHandler = () => {
    menuClicked = false;
    contactOpen = false;
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
  h4 {
    padding-top: 10px;
    line-height: 23px;
    font-size: 12px;
    padding-bottom: 26px;
    cursor: default;
  }
  .sidebar {
    display: none;
    position: absolute;
    top: 180px;
    left: 0;
    padding-left: 70px;
    background-color: black;
    border-right: 1px solid var(--near-black);
    height: calc(100vh - 230px);
    z-index: 3;
    min-height: 560px;
  }
  .sidebarClosed {
    width: 80px;
    transition: 1s ease;
  }
  .sidebarOpen {
    width: 170px;
    transition: 1s ease;
  }
  .menu-images {
    margin-top: -14px !important;
    z-index: 10;
    margin-bottom: 80px;
  }
  nav {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 64vh;

    div {
      z-index: 6;
    }
  }
  .liClosed {
    color: transparent;
    transition: color 1s ease;
  }
  .liOpen {
    color: var(--grey);
    transition: color 1s ease 0.2s;
    cursor: pointer;
  }
  .h4Open {
    opacity: 0;
    transition: opacity 1.5s ease;
  }
  .h4Closed {
    opacity: 1;
    transition: opacity 2.5s ease 0.5s;
  }
  a {
    font-weight: 100;
    font-size: 12px;
    margin-top: -30px;
    display: block;
    // color: transparent;
    opacity: 0;
    transition: opacity 0.5s ease;
  }
  .contactOpen {
    color: var(--off-white);
    opacity: 1;
    transition: opacity 1s ease;
  }

  @media (min-width: 1025px) {
    .sidebar {
      display: block;
    }
  }
</style>

<div
  class="sidebar"
  role="menu"
  on:mouseenter={menuClickedHandler}
  on:mouseleave={closeMenuHandler}
>
  <h4
    on:click={menuClickedHandler}
    class:h4Open={isMenuOpen}
    class:h4Closed={!isMenuOpen}
  >
    MENU
  </h4>
  <nav class:sidebarOpen={isMenuOpen} class:sidebarClosed={!isMenuOpen}>
    <div>
      <ul class="menu-images">
        <MenuItem
          title="recent"
          isOpen={isMenuOpen}
          onClick={() => handleClick('recent')}
        />
        <MenuItem
          title="storms"
          isOpen={isMenuOpen}
          onClick={() => handleClick('storms')}
        />
        <MenuItem
          title="landscapes"
          isOpen={isMenuOpen}
          onClick={() => handleClick('landscapes')}
        />
        <MenuItem
          title="urban"
          isOpen={isMenuOpen}
          onClick={() => handleClick('urban')}
        />
        <MenuItem
          title="trees"
          isOpen={isMenuOpen}
          onClick={() => handleClick('trees')}
        />
      </ul>
      <ul class="menu-info">
        <Link to="/biography"
          ><MenuItem
            title="biography"
            isOpen={isMenuOpen}
            onClick={() => handleClick('biography')}
          /></Link
        >
        <Link to="/information"
          ><MenuItem
            title="information"
            isOpen={isMenuOpen}
            onClick={() => handleClick('information')}
          /></Link
        >
        <MenuItem
          title="contact"
          isOpen={isMenuOpen}
          onClick={() => {
            contactOpen = true;
          }}
        />
        {#if contactOpen && isMenuOpen}
          <a href="mailto:mitchdob@gmail.com" class:contactOpen
            >mitchdob@gmail.com</a
          >
        {/if}
      </ul>
    </div>
  </nav>
</div>
