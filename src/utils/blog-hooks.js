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

const queryPostList = `
query Posts($first: Int, $after: String) {
  posts(first: $first, after: $after) {
    pageInfo {
      endCursor
      hasNextPage
    }
    nodes {
      date
      title
      slug
      id
      content(format: RENDERED)
      author {
        name
      }
    }
  }
}`;

export function usePostList(offset) {
  return useSWR([queryPostList, offset], (q, cursor) =>
    gqlFetcher(q, { first: 3, after: cursor })
  );
}

export function getPostList() {
  return fetchAndCache(queryPostList, { first: 3, after: null }, [
    queryPostList,
    null,
  ]);
}
