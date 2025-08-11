import React from 'react';
import { Calendar, ExternalLink, Clock, Eye } from 'lucide-react';

const VideoCard = ({ video, index }) => {
  const formatViews = (viewCount) => {
    if (!viewCount) return null;
    const count = parseInt(viewCount);
    if (count >= 1000000) {
      return `${(count / 1000000).toFixed(1)}M views`;
    } else if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}K views`;
    }
    return `${count.toLocaleString()} views`;
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
      <a 
        href={`https://www.youtube.com/watch?v=${video.videoid}`} 
        target="_blank" 
        rel="noopener noreferrer"
        className="block"
      >
        <div className="relative">
          <img
            src={video.thumbnail}
            alt={video.title}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
          <div className="absolute top-2 right-2">
            <ExternalLink className="w-5 h-5 text-white drop-shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </div>
        
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-3 text-gray-900 line-clamp-2 group-hover:text-red-600 transition-colors duration-200">
            {video.title}
          </h3>
          
          <div className="space-y-2">
            <div className="flex items-center text-gray-500 text-sm">
              <Calendar className="w-4 h-4 mr-2 flex-shrink-0" />
              <span>{formatDate(video.publishedAt)}</span>
            </div>
            
            {video.viewCount && (
              <div className="flex items-center text-gray-500 text-sm">
                <Eye className="w-4 h-4 mr-2 flex-shrink-0" />
                <span>{formatViews(video.viewCount)}</span>
              </div>
            )}
          </div>
        </div>
      </a>
    </div>
  );
};

export default VideoCard;
