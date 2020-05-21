import useSWR from 'swr';
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
 
 * @returns {Object} The api response
 */
export function useDonations(page) {
  return useSWR([queryDonations, page], (q, page) => gqlFetcher(q, { page }));
}

/**
 * @param {number} page The page to be fetched
 */
export function getDonations(page) {
  return fetchAndCache(queryDonations, { page }, [queryDonations, 1]);
}
