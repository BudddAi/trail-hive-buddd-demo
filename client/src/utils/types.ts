export interface MetaImage {
  id: number;
  url: string;
  alternativeText?: string;
  width: number;
  height: number;
}

export interface OpenGraph {
  id: number;
  ogTitle: string;
  ogDescription: string;
  ogUrl: string;
  ogType?: string;
}

export interface Seo {
  id: number;
  metaTitle: string;
  metaDescription: string;
  keywords?: string;
  metaRobots?: string;
  metaViewport?: string;
  canonicalURL?: string;
  structuredData?: any;
  metaImage: MetaImage;
  openGraph: OpenGraph;
}

export interface HomePage {
  Body: any[];
  seo: Seo;
}
