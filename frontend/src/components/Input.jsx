import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DataShow from "./DataShow";

export default function Input() {
  const [idInput, SetIdInput] = useState("");
  const [maxResults, setMaxResults] = useState(""); 
  const navigate = useNavigate();

  function handleIdInput(event) {
    SetIdInput(event.target.value);
  }

  function handleMaxResultsInput(event) {
    setMaxResults(event.target.value);
  }

  function handleSubmit() {
    navigate("/show", {
      state: { idInput, maxResults }, 
    });
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen w-full bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Enter ID or Link</h2>
        
        <input
          type="text"
          className="border border-gray-300 p-2 w-full rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your ID"
          value={idInput}
          onChange={handleIdInput}
          required
        />
        
        <input
          type="number"
          className="border border-gray-300 p-2 w-full rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Max Results (optional)"
          value={maxResults}
          onChange={handleMaxResultsInput} 
        />
        
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 w-full transition duration-200"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>

      <div className="mt-6 w-full max-w-md">
        <DataShow idData={idInput} />
      </div>
    </div>
  );
}
