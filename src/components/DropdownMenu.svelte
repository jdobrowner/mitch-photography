<script lang="ts">
  import { onMount } from 'svelte';
  import { Link } from 'svelte-routing';
  import { get, writable } from 'svelte/store';
  import CloseArrow from './CloseArrow.svelte';
  //   import { photos, currentPage, redirect } from '../stores'; // Assuming you have these stores

  //   import resetCategory from '../actions/reset-category.action';
  //   import setToRecent from '../actions/set-to-recent.action';
  //   import search from '../actions/search.action';
  //   import setCurrentPage from '../actions/current-page.action';
  //   import redirectAction from '../actions/redirect.action';

  const nearBlack = '#212121';
  const grey = '#757575';
  const offWhite = '#BDBDBD';
  const menuStyling = {
    dropdownClosed: {
      maxHeight: '0',
      overflow: 'hidden',
      borderBottom: '1px solid black',
    },
    dropdownOpen: {
      maxHeight: '800px',
      borderBottom: '1px solid ' + nearBlack,
    },
    liClosed: {
      color: 'transparent',
      transition: 'color 1s ease ',
      textAlign: 'right',
      margin: '30px 0',
    },
    liOpen: {
      color: grey,
      transition: 'color 1s ease .6s',
      textAlign: 'right',
      margin: '30px 0',
      cursor: 'pointer',
    },
    svgClosed: {
      strokeOpacity: '0',
      transition: 'all 1s ease',
    },
    svgOpen: {
      strokeOpacity: '1',
      transition: 'all 1s ease .4s',
    },
  };

  let openMenu = false;
  let menuTimeout = false;

  function openMenuHandler() {
    openMenu = true;
  }

  function closeMenuHandler() {
    openMenu = false;
  }

  function menuTimeoutHandler() {
    setTimeout(() => {
      menuTimeout = false;
    }, 1500);
  }

  function isMenuOpen() {
    return openMenu && !menuTimeout;
  }

  function menuStyle() {
    // return isMenuOpen() ? menuStyling.dropdownOpen : menuStyling.dropdownClosed;
  }

  function liStyle(page = '') {
    //   if (isMenuOpen()) {
    //     if (get(currentPage) === page) {
    //       return { ...menuStyling.liOpen, color: offWhite };
    //     } else {
    //       return menuStyling.liOpen;
    //     }
    //   } else {
    //     return menuStyling.liClosed;
    //   }
  }

  function svgStyle() {
    return isMenuOpen() ? menuStyling.svgOpen : menuStyling.svgClosed;
  }

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

<style>
  .dropdownClosed {
    max-height: 0;
    overflow: hidden;
    border-bottom: 1px solid black;
  }

  .dropdownOpen {
    max-height: 800px;
    border-bottom: 1px solid #212121;
  }

  .liClosed {
    color: transparent;
    transition: color 1s ease;
    text-align: right;
    margin: 30px 0;
  }

  .liOpen {
    color: #757575;
    transition: color 1s ease 0.6s;
    text-align: right;
    margin: 30px 0;
    cursor: pointer;
  }
</style>

<div class="dropdown-menu">
  <h4 on:click="{openMenuHandler}" on:mouseenter="{openMenuHandler}">MENU</h4>
  <nav
    class="col-12 dropdown"
    style="{menuStyle()}"
    on:mouseleave="{closeMenuHandler}"
  >
    <ul class="menu-images">
      <li style="{liStyle('recent')}" on:click="{() => handleClick('recent')}">
        RECENT
      </li>
      <li style="{liStyle('storms')}" on:click="{() => handleClick('storms')}">
        STORMS
      </li>
      <li
        style="{liStyle('landscapes')}"
        on:click="{() => handleClick('landscapes')}"
      >
        LANDSCAPES
      </li>
      <li style="{liStyle('urban')}" on:click="{() => handleClick('urban')}">
        URBAN
      </li>
      <li style="{liStyle('trees')}" on:click="{() => handleClick('trees')}">
        TREES
      </li>
    </ul>
    <ul class="menu-info">
      <Link to="/biography"
        ><li style="{liStyle('bio')}" on:click="{() => handleClick('bio')}">
          BIOGRAPHY
        </li></Link
      >
      <Link to="/information"
        ><li style="{liStyle('info')}" on:click="{() => handleClick('info')}">
          INFORMATION
        </li></Link
      >
      <div on:click="{closeMenuHandler}" class="close-menu">
        <CloseArrow isOpen="{openMenu}" />
      </div>
    </ul>
  </nav>
</div>
