import useSWR from 'swr';
import { gqlFetcher } from './functions';

const queryModulesCategory = `
query Categories {
  categories(where: {name: "AzerothCore-Wotlk"}) {
    nodes {
      name
      databaseId
      children {
        nodes {
          name
          databaseId
        }
      }
    }
  }
}`;

/**
 *
 */
export function useCategories() {
  return useSWR([queryModulesCategory], q => gqlFetcher(q));
}
