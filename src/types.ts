export interface ContentfulSys {
  type: string;
  id?: string;
  contentType?: {
    sys: {
      id: string;
    };
  };
}

export interface ContentfulItem {
  sys: ContentfulSys;
  fields: any;
}

export interface ContentfulResponse {
  sys: ContentfulSys;
  total: number;
  skip: number;
  limit: number;
  items: ContentfulItem[];
}

export interface Representative {
  id: string;
  name: string;
  location: string;
  galleryUrl: string;
  linkText: string;
}

export interface HomePageContent {
  id: string;
  imageTitle: string;
  quote: string;
  quoteAuthor: string;
  quoteDate: string;
}

export interface Publication {
  id: string;
  publisher: string;
  title: string;
  date: string;
  publisherUrl: string;
  linkText: string;
  mediaType: string;
  priority: number;
}

export interface Photograph {
  id: string;
  title: string;
  location: string;
  year: number;
  category: string;
  priority: number;
  addToRecent: boolean;
  recentPriority: number;
}

export interface Exhibition {
  id: string;
  title: string;
  type: string;
  startDate: string;
  endDate: string;
  location: string;
  galleryUrl: string;
  linkText: string;
}

export interface ParsedContentfulResponse {
  representatives: Representative[];
  homePageContents: HomePageContent[];
  publications: Publication[];
  photographs: Photograph[];
  exhibitions: Exhibition[];
}

export type photographCategory =
  | 'recent'
  | 'storms'
  | 'landscapes'
  | 'urban'
  | 'trees'
  | 'archive';
