import useSWR from 'swr';
import { gqlFetcher, fetchAndCache } from './functions';

const queryTestimonialsList = `
query Testimonials {
  testimonials(where: {orderby: {field: TITLE, order: ASC}}) {
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

const queryTestimonial = `
query Testimonial($id: ID!) {
  testimonial(id: $id, idType: URI) {
    title
    content
    featuredImage {
      sourceUrl
      altText
    }
  }
}
`;

export function useCurrentTestimonial(slug) {
  return useSWR([queryTestimonial, slug], (q, sl) => gqlFetcher(q, { id: sl }));
}

export function getCurrentTestimonial(slug) {
  return fetchAndCache(queryTestimonial, { id: slug }, [
    queryTestimonial,
    slug,
  ]);
}
