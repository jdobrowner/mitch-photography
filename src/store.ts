import { derived, writable } from 'svelte/store';
import type {
  Exhibition,
  HomePageContent,
  ParsedContentfulResponse,
  Photograph,
  Publication,
  Representative,
} from './types';

export const representativesStore = writable<Representative[]>([]);
export const homePageContentsStore = writable<HomePageContent[]>([]);
export const publicationsStore = writable<Publication[]>([]);
export const exhibitionsStore = writable<Exhibition[]>([]);
// Create stores for each photograph category
export const recentPhotographsStore = writable<Photograph[]>([]);
export const stormsPhotographsStore = writable<Photograph[]>([]);
export const landscapesPhotographsStore = writable<Photograph[]>([]);
export const urbanPhotographsStore = writable<Photograph[]>([]);
export const treesPhotographsStore = writable<Photograph[]>([]);
export const archivePhotographsStore = writable<Photograph[]>([]);

// Create derived stores to return the first photograph of each photograph type
export const homePagePhotograph = derived(
  archivePhotographsStore,
  ($archivePhotographsStore) => $archivePhotographsStore[0]
);
export const firstRecentPhotograph = derived(
  recentPhotographsStore,
  ($recentPhotographsStore) => $recentPhotographsStore[0]
);
export const firstStormsPhotograph = derived(
  stormsPhotographsStore,
  ($stormsPhotographsStore) => $stormsPhotographsStore[0]
);
export const firstLandscapesPhotograph = derived(
  landscapesPhotographsStore,
  ($landscapesPhotographsStore) => $landscapesPhotographsStore[0]
);
export const firstUrbanPhotograph = derived(
  urbanPhotographsStore,
  ($urbanPhotographsStore) => $urbanPhotographsStore[0]
);
export const firstTreesPhotograph = derived(
  treesPhotographsStore,
  ($treesPhotographsStore) => $treesPhotographsStore[0]
);
export const firstArchivePhotograph = derived(
  archivePhotographsStore,
  ($archivePhotographsStore) => $archivePhotographsStore[0]
);

const loadStoresWithContentful = (content: ParsedContentfulResponse) => {
  representativesStore.set(content.representatives);
  homePageContentsStore.set(content.homePageContents);
  publicationsStore.set(content.publications);
  exhibitionsStore.set(content.exhibitions);
  categorizePhotographs(content.photographs);
};

// Functions to sort photographs by priority
function sortPhotographsByPriority(photographs: Photograph[]): Photograph[] {
  return photographs.sort((a, b) => b.priority - a.priority);
}
function sortRecentPhotographsByPriority(
  photographs: Photograph[]
): Photograph[] {
  return photographs.sort((a, b) => b.recentPriority - a.recentPriority);
}

function categorizePhotographs(photographs: Photograph[]): void {
  const recent: Photograph[] = [];
  const storms: Photograph[] = [];
  const landscapes: Photograph[] = [];
  const urban: Photograph[] = [];
  const trees: Photograph[] = [];
  const archive: Photograph[] = [];

  photographs.forEach((photo) => {
    switch (photo.category) {
      case 'recent':
        recent.push(photo);
        break;
      case 'storms':
        storms.push(photo);
        break;
      case 'landscapes':
        landscapes.push(photo);
        break;
      case 'urban':
        urban.push(photo);
        break;
      case 'trees':
        trees.push(photo);
        break;
      case 'archive':
        archive.push(photo);
        break;
    }
  });

  recentPhotographsStore.set(sortRecentPhotographsByPriority(recent));
  stormsPhotographsStore.set(sortPhotographsByPriority(storms));
  landscapesPhotographsStore.set(sortPhotographsByPriority(landscapes));
  urbanPhotographsStore.set(sortPhotographsByPriority(urban));
  treesPhotographsStore.set(sortPhotographsByPriority(trees));
  archivePhotographsStore.set(sortPhotographsByPriority(archive));
}
