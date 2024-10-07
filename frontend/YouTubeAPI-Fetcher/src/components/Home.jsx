import React from "react"; 
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex font-sticknobills flex-col md:flex-row items-center justify-between h-screen w-full bg-gray-100">
      {/* Left Section: Text */}
      <div className="flex-1 p-8 md:p-16 mt-14">
        <h1 className="text-lg md:text-lg font-bold mb-4 ">
          Welcome to Youtube Playlist Fetcher
        </h1>
        <p className="text-md md:text-md text-gray-700 mb-4">
          You can use our endpoint to fetch the videos from the youtube easily.
        </p>
        <Link
                  to="/fetcher"
                  className="block py-2 px-3 font-semibold text-blue-600 rounded hover:text-blue-900"
                >
                 Playlist Fetcher
                </Link>

      </div>
      {/* Right Section: Image */}
      <div className="flex-1 p-8 md:p-16">
        <img
          loading="lazy"
          src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6.jpg"
          alt="Gtu Image"
          className="w-full h-auto object-cover rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default Home;