import { createClient } from 'contentful';
import type {
  ContentfulResponse,
  Exhibition,
  HomePageContent,
  ParsedContentfulResponse,
  Photograph,
  Publication,
  Representative,
} from './types';

export const client = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE || '',
  accessToken: import.meta.env.VITE_CONTENTFUL_TOKEN || '',
});

export const getEntries = async () => {
  const contentfulResponse = await client.getEntries({ limit: 1000 });
  const parsedEntries = parseContentfulResponse(
    contentfulResponse as ContentfulResponse
  );
  console.log(parsedEntries);
  return parsedEntries;
};

// Custom function to parse the Contentful response and extract relevant information
function parseContentfulResponse(
  response: ContentfulResponse
): ParsedContentfulResponse {
  // Create separate arrays for each content type
  const representatives: Representative[] = [];
  const homePageContents: HomePageContent[] = [];
  const publications: Publication[] = [];
  const photographs: Photograph[] = [];
  const exhibitions: Exhibition[] = [];

  response.items.forEach((item) => {
    let parsedItem;

    // Add specific fields based on content type (e.g. 'representative', 'homePageContent', etc.)
    if (item.sys.contentType?.sys.id === 'representative') {
      parsedItem = {
        id: item.sys.id!,
        name: item.fields.name,
        location: item.fields.location,
        galleryUrl: item.fields.galleryUrl,
        linkText: item.fields.linkText,
      };
      representatives.push(parsedItem);
    } else if (item.sys.contentType?.sys.id === 'homePageContent') {
      parsedItem = {
        id: item.sys.id!,
        imageTitle: item.fields.imageTitle,
        quote: item.fields.quote,
        quoteAuthor: item.fields.quoteAuthor,
        quoteDate: item.fields.quoteDate,
        imageUrl: item.fields.coverImage.fields.file.url,
      };
      homePageContents.push(parsedItem);
    } else if (item.sys.contentType?.sys.id === 'publication') {
      parsedItem = {
        id: item.sys.id!,
        publisher: item.fields.publisher,
        title: item.fields.title,
        date: item.fields.date,
        publisherUrl: item.fields.publisherUrl,
        linkText: item.fields.linkText,
        mediaType: item.fields.mediaType,
        priority: item.fields.priority,
      };
      publications.push(parsedItem);
    } else if (item.sys.contentType?.sys.id === 'photograph') {
      parsedItem = {
        id: item.sys.id!,
        title: item.fields.title,
        location: item.fields.location,
        year: item.fields.year,
        category: item.fields.category,
        priority: item.fields.priority,
        addToRecent: item.fields.addToRecent,
        recentPriority: item.fields.recentPriority,
        imageUrl: item.fields.image.fields.file.url,
      };
      photographs.push(parsedItem);
    } else if (item.sys.contentType?.sys.id === 'exhibition') {
      parsedItem = {
        id: item.sys.id!,
        title: item.fields.title,
        type: item.fields.type,
        startDate: item.fields.startDate,
        endDate: item.fields.endDate,
        location: item.fields.location,
        galleryUrl: item.fields.galleryUrl,
        linkText: item.fields.linkText,
      };
      exhibitions.push(parsedItem);
    }
  });

  // Return an object containing all arrays
  return {
    representatives,
    homePageContents,
    publications,
    photographs,
    exhibitions,
  };
}
