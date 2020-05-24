import fetch from 'unfetch';
import { request } from 'graphql-request';
import { format, parseISO } from 'date-fns';
import { mutate } from 'swr';

export const fetcher = url => fetch(url).then(r => r.json());

const API = 'https://azerothcore.altervista.org/wp/graphql';
export const gqlFetcher = (query, variables) => request(API, query, variables);

/**
 * @param query
 * @param variables
 * @param key
 * @param fetcherToUse
 */
export async function fetchAndCache(
  query,
  variables,
  key,
  fetcherToUse = 'gqlFetcher'
) {
  const apiFetcher =
    fetcherToUse === 'gqlFetcher'
      ? gqlFetcher(query, variables).then(data => data)
      : fetcher(query);
  const response = await mutate(key, apiFetcher, false);
  return response;
}

export const cutString = (string, length = 60) => {
  if (string.length > length) {
    return `${string.slice(0, length - 3)}...`;
  }
  return string;
};

export const getPreviewText = (string, length) => {
  const noHtml = string.replace(/<[^>]+>/g, '');
  const previewString = cutString(noHtml, length).replace(
    /(\r\n|\n|\r|' ')/gm,
    ' '
  );
  return previewString.toLowerCase();
};

export const formatDate = dateString => {
  return `${format(parseISO(dateString), 'dd LLLL yyyy')}`;
};
