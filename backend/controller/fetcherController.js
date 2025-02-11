import { extractPlaylistId } from "./extractPlaylistId.js";
import {getPlaylistVideos} from "./getPlaylistVideos.js"



export async function  fethcherController(req, res) {
  try {
    const apikey = process.env.YOUTUBE_API_KEY;
    const maxresults = req.query.maxresults || 10; 
    const playlistInput = req.query.playlistid;

    if (!playlistInput) {
      return res.status(400).json({ error: 'Playlist ID or URL is required' });
    }

    const playlistid = extractPlaylistId(playlistInput);
    console.log("Playlist ID: " + playlistid);
    
    const videos = await getPlaylistVideos(apikey, maxresults, playlistid);
    res.json(videos);
  } catch (error) {
    console.error('Error fetching YouTube data:', error);
    res.status(500).json({ error: 'An error occurred while fetching YouTube data' });
  }
}