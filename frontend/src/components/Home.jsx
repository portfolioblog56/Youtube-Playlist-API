import React from "react"; 
import { Link } from "react-router-dom";
import { ArrowRight, Play, List } from "lucide-react";

const Home = () => {
  return (
    <div className="flex font-sticknobills flex-col md:flex-row items-center justify-between min-h-screen w-full bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Left Section: Text */}
      <div className="flex-1 p-8 md:p-16 mt-14">
        <div className="max-w-lg">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
            Welcome to 
            <span className="text-red-600 block">YouTube Playlist Fetcher</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
            Easily fetch and organize videos from any YouTube playlist using our simple and powerful API endpoint.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/fetcher"
              className="inline-flex items-center justify-center px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              <Play className="w-5 h-5 mr-2" />
              Start Fetching
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            
            <div className="inline-flex items-center px-6 py-3 bg-white text-gray-700 font-semibold rounded-lg border border-gray-200 shadow-sm">
              <List className="w-5 h-5 mr-2 text-gray-500" />
              Simple & Fast
            </div>
          </div>
        </div>
      </div>
      
      {/* Right Section: Image */}
      <div className="flex-1 p-8 md:p-16">
        <div className="relative">
          <img
            loading="lazy"
            src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6.jpg"
            alt="YouTube Platform"
            className="w-full h-auto object-cover rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;