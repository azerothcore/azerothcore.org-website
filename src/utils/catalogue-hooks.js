import useSWR from 'swr';
import { gqlFetcher, fetchAndCache } from './functions';

const queryCatalogueList = `
query CatalogueItems($first: Int, $after: String, $title: String) {
  catalogueItems(first: $first, after: $after, where: {title: $title}) {
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
 */
export function useCatalogueList(offset) {
  return useSWR([queryCatalogueList, offset], (q, cursor) =>
    gqlFetcher(q, { first: 10, after: cursor })
  );
}

/**
 *
 */
export function getCatalogueList() {
  return fetchAndCache(queryCatalogueList, { first: 10, after: null }, [
    queryCatalogueList,
    null,
  ]);
}
