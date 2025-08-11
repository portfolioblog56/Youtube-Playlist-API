import url from 'url';

export function extractPlaylistId(input) {
  if (!input) {
    return null;
  }
  if (input.startsWith('http')) {
    const parsedUrl = url.parse(input, true);
    const listParam = parsedUrl.query.list;
    if (listParam) {
      return listParam;
    }
  }
  return input;
}
