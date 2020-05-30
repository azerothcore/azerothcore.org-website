import useSWR from 'swr';
import { gqlFetcher, fetchAndCache } from './functions';

const queryCatalogueList = `
query CatalogueItems($first: Int, $after: String, $search: String) {
  catalogueItems(first: $first, after: $after, where: {search: $search}) {
    pageInfo {
      endCursor
      hasNextPage
    }
    nodes {
      date
      title
      slug
      content(format: RENDERED)
      author {
        name
        nicename
        nickname
      }
      databaseId
      featuredImage {
        altText
        uri
        link
      }
    }
  }
}`;

/**
 * @param offset
 * @param search
 */
export function useCatalogueList(offset, search) {
  return useSWR([queryCatalogueList, offset, search], (q, cursor, s) =>
    gqlFetcher(q, { first: 10, after: cursor, search: s })
  );
}

/**
 *
 */
export function getCatalogueList() {
  return fetchAndCache(
    queryCatalogueList,
    { first: 10, after: null, search: null },
    [queryCatalogueList, null, null]
  );
}
