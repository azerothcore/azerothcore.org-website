import fetch from 'unfetch';

export const fetcher = url => fetch(url).then(r => r.json());

export const cutString = (string, length = 60) => {
  if (string.length > length) {
    return `${string.slice(0, length - 3)}...`;
  }
  return string;
};

export const getPreviewText = (string, length) => {
  const noHtml = string.replace(/<[^>]+>/g, '');
  const previewString = cutString(noHtml, length);
  return previewString.toLowerCase();
};
