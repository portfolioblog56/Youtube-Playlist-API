import url from 'url';

export function extractPlaylistId(input) {
  if (input.startsWith('http')) {
    const parsedUrl = url.parse(input, true);
    const listParam = parsedUrl.query.list;
    if (listParam) {
      return String(listParam);
    }
  }
  // If the input isn't a URL or no 'list' parameter is found,
  // simply return the input as a string.
  return input.toString();
}
