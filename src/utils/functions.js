import fetch from 'unfetch';
import { request } from 'graphql-request';
import { format, parseISO } from 'date-fns';

export const fetcher = url => fetch(url).then(r => r.json());

const API = 'http://azerothcore.altervista.org/wp/graphql';
export const gqlFetcher = (query, variables) => request(API, query, variables);

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
