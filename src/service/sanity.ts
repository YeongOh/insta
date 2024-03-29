import { createClient } from '@sanity/client';
import ImageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

export const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  useCdn: false, // false as this project uses dynamic data
  apiVersion: '2023-04-05', // use current date (YYYY-MM-DD) to target the latest API version
  token: process.env.SANITY_SECRET_TOKEN, // Only if you want to update content with the client
});

const builder = ImageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source).width(800).url();
}

export const assetsURL = `https://${process.env.SANITY_PROJECT_ID}.api.sanity.io/v2021-03-25/assets/images/${process.env.SANITY_DATASET}`;
