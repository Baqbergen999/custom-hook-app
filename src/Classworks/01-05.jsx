import React, { useState } from "react";

const ImageGenerator = () => {
  const [prompt, setPrompt] = useState("");
  const [output, setOutput] = useState("");

  const generate = async () => {
    const response = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=СЕНІҢ_API_КІЛТІҢ",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
        }),
      }
    );

    const data = await response.json();
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text || "Нәтиже жоқ";
    setOutput(text);
  };

  return (
    <div>
      <h1>Gemini Text Generator</h1>
      <input
        type="text"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Describe anything"
      />
      <button onClick={generate}>Generate</button>
      <pre>{output}</pre>
    </div>
  );
};

export default ImageGenerator;
