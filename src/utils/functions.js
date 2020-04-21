import fetch from 'unfetch';

export const fetcher = url => fetch(url).then(r => r.json());

export const cutString = string => {
  if (string.length > 60) {
    return `${string.slice(0, 57)}...`;
  }
  return string;
};
