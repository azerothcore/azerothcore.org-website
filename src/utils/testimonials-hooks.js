import useSWR from 'swr';
import { gqlFetcher, fetchAndCache } from './functions';

const queryTestimonialsList = `
query Testimonials {
  testimonials {
    nodes {
      id
      slug
      title
      content
      featuredImage {
        sourceUrl
        altText
      }
    }
  }
}
`;

export function useTestimonialsList() {
  return useSWR(queryTestimonialsList, () =>
    gqlFetcher(queryTestimonialsList, {})
  );
}

export function getTestimonialsList() {
  return fetchAndCache(queryTestimonialsList, {}, queryTestimonialsList);
}
