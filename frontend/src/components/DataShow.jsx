import { useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { AlertCircle, Video } from "lucide-react";
import { toast } from "react-toastify";
import LoadingSpinner from "./LoadingSpinner";
import VideoCard from "./VideoCard";

export default function DataShow() {
  const location = useLocation();
  const [playlistData, setPlaylistData] = useState([]);
  const [isLoading, setIsLoading] = useState(false); 
  const [error, setError] = useState(null); 

  const idInput = location.state?.idInput;
  const maxResults = location.state?.maxResults || 10; 

  useEffect(() => {
    const fetchPlaylist = async () => {
      if (!idInput) return;
      
      setIsLoading(true); 
      setError(null); 
      
      try {
        const response = await fetch(
          `${process.env.VITE_API_URL}/v1/youtube-playlist?playlistid=${encodeURIComponent(idInput)}&maxresults=${maxResults}`
        );

        if (!response.ok) {
          throw new Error(`Failed to fetch playlist: ${response.status}`);
        }

        const data = await response.json();
        setPlaylistData(data);
        toast.success(`Successfully loaded ${data.length} videos!`);
      } catch (error) {
        const errorMessage = error.message || "Failed to fetch playlist";
        setError(errorMessage); 
        toast.error(errorMessage);
      } finally {
        setIsLoading(false); 
      }
    };

    fetchPlaylist();
  }, [idInput, maxResults]);

  if (!idInput) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="text-center">
          <AlertCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-700 mb-2">No playlist specified</h2>
          <p className="text-gray-500">Please go back and enter a playlist ID or URL.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 mt-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Playlist Videos
          </h1>
          <div className="flex items-center justify-center space-x-2 text-gray-600">
            <Video className="w-5 h-5" />
            <span>Showing results for: {idInput}</span>
          </div>
        </div>

        {isLoading && (
          <LoadingSpinner size="lg" text="Fetching playlist videos..." />
        )}

        {error && (
          <div className="flex flex-col items-center justify-center py-16">
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md w-full text-center">
              <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-red-800 mb-2">Error</h3>
              <p className="text-red-600">{error}</p>
            </div>
          </div>
        )}

        {!isLoading && !error && playlistData.length === 0 && (
          <div className="flex flex-col items-center justify-center py-16">
            <Video className="w-16 h-16 text-gray-400 mb-4" />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No videos found</h3>
            <p className="text-gray-500">This playlist appears to be empty or private.</p>
          </div>
        )}

        {!isLoading && !error && playlistData.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {playlistData.map((video, index) => (
              <VideoCard key={video.videoid || index} video={video} index={index} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
