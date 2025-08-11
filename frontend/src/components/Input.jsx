import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, Hash, Settings } from "lucide-react";

export default function Input() {
  const [idInput, setIdInput] = useState("");
  const [maxResults, setMaxResults] = useState(""); 
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (idInput.trim()) {
      navigate("/show", {
        state: { idInput: idInput.trim(), maxResults: maxResults || "10" }, 
      });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-gradient-to-br from-gray-50 to-gray-100 p-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-md w-full border border-gray-100">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
            <Search className="w-8 h-8 text-red-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900">Enter Playlist Details</h2>
          <p className="text-gray-600 mt-2">Paste your YouTube playlist ID or URL below</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <Hash className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
              placeholder="Enter playlist ID or URL"
              value={idInput}
              onChange={(e) => setIdInput(e.target.value)}
              required
            />
          </div>
          
          <div className="relative">
            <Settings className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="number"
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
              placeholder="Max results (default: 10)"
              value={maxResults}
              onChange={(e) => setMaxResults(e.target.value)}
              min="1"
              max="50"
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-red-600 text-white py-3 px-4 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Fetch Playlist
          </button>
        </form>

        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-600">
            <strong>Tip:</strong> You can paste either a playlist ID (e.g., PLxxx...) or a full YouTube playlist URL.
          </p>
        </div>
      </div>
    </div>
  );
}
