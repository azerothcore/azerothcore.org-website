import { useState, useEffect, useCallback } from 'react';
import { cache, mutate } from 'swr';
import { gqlFetcher, fetchAndCache } from './functions';

const queryDonations = `
query Donations($page: Int) {
  givewp_donations(status: "publish", page: $page, number: 10) {
    first_name
    last_name
    total
    gateway
    date
    donor_id
  }
}`;

/**
 * @param {number} page The page to be fetched
 */
export function getDonations(page) {
  return fetchAndCache(queryDonations, { page }, [queryDonations, 1]);
}

/**
 *
 */
export function usePaginatedDonations() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [error, setError] = useState();
  const [hasNextPage, setHasNextPage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const loadMore = useCallback(() => {
    if (hasNextPage) {
      setPage(p => p + 1);
    }
  }, [hasNextPage]);

  useEffect(() => {
    setIsLoading(true);
    const loadData = async () => {
      try {
        const cachedData = cache.get([queryDonations, page]);
        const response = cachedData
          ? cachedData
          : await mutate(
              [queryDonations, page],
              gqlFetcher(queryDonations, { page }),
              false
            );

        setData(f => f.concat(response.givewp_donations));
        setIsLoading(false);
        const nextPage = page + 1;
        const nextPageResponse = await mutate(
          [queryDonations, nextPage],
          gqlFetcher(queryDonations, { page: nextPage }),
          false
        );
        if (nextPageResponse.givewp_donations.length === 0) {
          setHasNextPage(false);
        } else {
          setHasNextPage(true);
        }
      } catch (err) {
        setError(err);
        setIsLoading(false);
        setHasNextPage(false);
      }
    };
    loadData();
  }, [page]);

  return {
    data,
    error,
    hasNextPage,
    isLoading,
    loadMore,
  };
}
