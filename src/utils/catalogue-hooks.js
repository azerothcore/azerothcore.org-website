import useSWR from 'swr';
import { gqlFetcher, fetchAndCache } from './functions';

const queryCatalogueList = `
query CatalogueItems($first: Int, $after: String, $search: String, $categoryIn: [ID]) {
  catalogueItems(first: $first, after: $after, where: {search: $search, categoryIn: $categoryIn}) {
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
 * @param categoryIn
 */
export function useCatalogueList(offset, search, categoryIn) {
  return useSWR(
    [queryCatalogueList, offset, search, categoryIn],
    (q, cursor, s, catIn) =>
      gqlFetcher(q, { first: 10, after: cursor, search: s, categoryIn: catIn })
  );
}

/**
 *
 */
export function getCatalogueList() {
  return fetchAndCache(
    queryCatalogueList,
    { first: 10, after: null, search: null, categoryIn: null },
    [queryCatalogueList, null, null, null]
  );
}
