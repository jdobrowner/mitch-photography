<script>
  import { onMount } from 'svelte';
  import { Link, Route, Router } from 'svelte-routing';
  // import Home from './Home.svelte';
  // import Photo from './Photo.svelte';
  import DropdownMenu from './components/DropdownMenu.svelte';
  // import Sidebar from './Sidebar.svelte';

  let photos = [];
  let photoRoutes = [];

  onMount(() => {
    // const photosProps = JSON.parse(photos);
    // photos = [...photosProps.all];
    // photoRoutes = photos.map((photo, i) => {
    //   const url = '/' + photo.slug;
    //   return { url, photo };
    // });
  });

  // function photoComponent(photo) {
  //   return () => Photo({ props: { photo: JSON.stringify(photo) } });
  // }
</script>

<style>
  .app {
    max-width: 1500px;
    margin: 0 auto;
    padding: calc(100vw / 12);
    position: relative;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .fine-art {
    font-size: 10px;
    font-weight: 500;
    color: var(--light-grey);
    letter-spacing: 2px;
  }
  @media (min-width: 600px) {
    .app {
      padding-top: 50px;
    }
  }
  @media (min-width: 1025px) {
    .app {
      padding: 70px;
      padding-top: 50px;
    }
  }
</style>

<Router>
  <div class="app">
    <div>
      <Link to="/" class="logo col-7">
        <!-- <img src={Logo} /> -->
        <div>
          <h1 class="mitch-dobrowner">Mitch Dobrowner</h1>
          <h2 class="fine-art">Fine Art Photography</h2>
        </div>
      </Link>
      <DropdownMenu />
      <!-- <Sidebar {photos} /> -->

      <div class="routes">
        <!-- <Route path="/" component={Home} /> -->
        <!-- {#each photoRoutes as { url, photo }}
          <Route path={url} component={photoComponent(photo)} />
        {/each}
        <Route path="/biography" component={BioMain} />
        <Route path="/information" component={InfoMain} />
        <div class="thumbnail-div">
          <FilterBar />
          <ScrollBar />
        </div> -->
      </div>
    </div>
    <!-- <Route path="/:footer" component={Footer} /> -->
  </div>
</Router>
