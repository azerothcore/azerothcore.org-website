import useSWR from 'swr';
import { gqlFetcher, fetchAndCache } from './functions';

const queryPost = `
query Post($id: ID!) {
  post(id: $id, idType: SLUG) {
    author {
      name
    }
    title
    content(format: RENDERED)
    date
  }
}
`;

export function useCurrentPost(slug) {
  return useSWR([queryPost, slug], (q, sl) => gqlFetcher(q, { id: sl }));
}

export function getCurrentPost(slug) {
  return fetchAndCache(queryPost, { id: slug }, [queryPost, slug]);
}
