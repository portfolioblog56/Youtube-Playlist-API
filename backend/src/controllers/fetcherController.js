import { extractPlaylistId } from "../utils/extractPlaylistId.js";
import { getPlaylistVideos } from "../services/youtubeService.js";
import config from "../config/index.js";

export async function fetcherController(req, res, next) {
  try {
    const { playlistid: playlistInput, maxresults } = req.query;

    const playlistid = extractPlaylistId(playlistInput);
    if (!playlistid) {
      return res.status(400).json({ error: "Invalid Playlist ID or URL" });
    }
    console.log("Playlist ID: " + playlistid);

    const videos = await getPlaylistVideos(
      config.youtubeApiKey,
      config.youtubeApiUrl,
      maxresults || 10,
      playlistid
    );
    res.json(videos);
  } catch (error) {
    console.error("Error fetching YouTube data:", error);
    next(error);
  }
}
