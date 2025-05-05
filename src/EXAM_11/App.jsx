import { useState, useEffect } from "react";
import axios from "axios";
const GeminiSearch = () => {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchHistory, setSearchHistory] = useState([]);


  useEffect(() => {
    const storedHistory = localStorage.getItem("geminiSearchHistory");
    if (storedHistory) {
      setSearchHistory(JSON.parse(storedHistory));
    }
  }, []);


  useEffect(() => {
    localStorage.setItem("geminiSearchHistory", JSON.stringify(searchHistory));
  }, [searchHistory]);
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };


  const handleSearch = async () => {
    if (!input.trim()) return;
    setLoading(true);
    setError(null);
    setResponse("");
    try {
      const res = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyAo_H2fkN00fjm-sQkU2t2EdNDeSlx9Zeg`,
        { contents: [{ parts: [{ text: input }] }] },
        { headers: { "Content-Type": "application/json" } }
      );
      const generatedText = res.data.candidates[0].content.parts[0].text;
      if (generatedText) {
        setResponse(generatedText);
        setSearchHistory((prevHistory) => [
          { query: input, response: generatedText},
          ...prevHistory,
        ]);
      } else {
        setResponse("Answer is empty.");
      }
    } catch (err) {
      console.error(err);
      setError("Error while requesting Gemini API");
    } finally {
      setLoading(false);
    }
  };


  return (
    <div>
      
      <h2 className="text-[40px] text-center font-bold">Gemini Search</h2>
      <div className="flex gap-4 items-center justify-center mt-4 w-[80%] mx-auto">
        
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          placeholder="Enter your question"
          className="border border-gray-300 rounded-[20px] p-5 w-full"
        />
        <button className="bg-gray-100 p-5 shadow-md rounded-[20px] w-30%" onClick={handleSearch} disabled={loading}>
          
          {loading ? "Loading..." : "Search"}
        </button>
      </div>
      {error && <p>{error}</p>}
      {response && (
        <div className="bg-gray-100 p-10 rounded-[20px] mt-4 shadow-md w-[80%] mx-auto">
          
          <h3 className="text-[25px] font-bold mb-[20px]">Answer:</h3> <p>{response}</p>
        </div>
      )}
      {searchHistory.length > 0 && (
        <div className="bg-gray-100 p-10 rounded-[20px] mt-4 shadow-md w-[80%] mx-auto"> 
          
          <h3 className="text-[25px] font-bold">Question history:</h3>
          <ul>
            
            {searchHistory.map((item, index) => (
              <li key={index} className="m-5 p-5 bg-gray-200 rounded-[20px] shadow-md">
                
                <strong>Question:</strong> {item.query} <br />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default GeminiSearch;
