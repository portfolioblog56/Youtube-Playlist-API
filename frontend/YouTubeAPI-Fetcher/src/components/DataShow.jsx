import { useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";

export default function DataShow() {
  const location = useLocation();
  const [playlistData, setPlaylistData] = useState([]);
  const [isLoading, setIsLoading] = useState(false); 
  const [error, setError] = useState(null); 

  const idInput = location.state?.idInput;
  const maxResults = location.state?.maxResults || 10; 

  useEffect(() => {
    const fetchPlaylist = async () => {
      setIsLoading(true); 
      setError(null); 
      try {
        const response = await fetch(
          `https://youtube-playlist-api.vercel.app/youtube-playlist?playlistid=${idInput}&maxresults=${maxResults}`
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setPlaylistData(data);
      } catch (error) {
        setError(error.message); 
      } finally {
        setIsLoading(false); 
      }
    };

    if (idInput) {
      fetchPlaylist();
    }
  }, [idInput, maxResults]);

  return (
    <div className="flex flex-col items-center justify-center p-4 mt-10 md:mt-20 bg-gray-100">
      <h2 className="text-3xl font-bold mb-6">Playlist Videos</h2>

      {isLoading ? ( 
        <p className="text-lg">Loading...</p>
      ) : error ? ( 
        <p className="text-red-500">{error}</p>
      ) : playlistData.length <= 0 ? (
        <p className="text-lg">No videos available.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {playlistData.map((video, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <a href={`https://www.youtube.com/watch?v=${video.videoid}`} target="_blank" rel="noopener noreferrer">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{video.title}</h3>
                  {/* <p className="text-gray-600 text-sm mb-1">Channel: {video.channelTitle}</p> */}
                  <p className="text-gray-600 text-sm">Published on: {new Date(video.publishedAt).toLocaleDateString()}</p>
                  {/* Add views if available */}
                  {video.viewCount && (
                    <p className="text-gray-600 text-sm">Views: {video.viewCount}</p>
                  )}
                </div>
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
