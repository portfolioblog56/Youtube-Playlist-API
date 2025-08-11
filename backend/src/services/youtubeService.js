import axios from 'axios';

async function getPlaylistVideos(apikey, apiUrl, maxresults, playlistid) {
  if (!apikey) {
    throw new Error('YouTube API key is required');
  }
  
  if (!apiUrl) {
    throw new Error('YouTube API URL is required');
  }

  const url = `${apiUrl}?part=snippet&playlistId=${playlistid}&maxResults=${maxresults}&key=${apikey}`;
  
  console.log('Fetching from URL:', url);
  
  try {
    const response = await axios.get(url);
    const playlistItems = response.data.items;

    if (!playlistItems || playlistItems.length === 0) {
      return [];
    }

    return playlistItems.map(item => ({
      title: item.snippet.title,
      thumbnail: item.snippet.thumbnails.high?.url || item.snippet.thumbnails.medium?.url || item.snippet.thumbnails.default?.url,
      videoid: item.snippet.resourceId.videoId,
      channelTitle: item.snippet.channelTitle,
      publishedAt: item.snippet.publishedAt,
    }));
  } catch (error) {
    console.error('Error fetching playlist videos:', error.response?.data || error.message);
    
    if (error.response?.status === 404) {
      throw new Error('Playlist not found or is private');
    } else if (error.response?.status === 403) {
      throw new Error('API quota exceeded or invalid API key');
    } else if (error.response?.data?.error?.message) {
      throw new Error(error.response.data.error.message);
    } else {
      throw new Error('Failed to fetch playlist videos.');
    }
  }
}

export { getPlaylistVideos };
