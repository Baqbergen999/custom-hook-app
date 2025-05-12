import { useState } from "react";

const GeminiChat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    try {
      const res = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyAo_H2fkN00fjm-sQkU2t2EdNDeSlx9Zeg`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            contents: [{ parts: [{ text: input }] }],
          }),
        }
      );
      const data = await res.json();
      const botText =
        data?.candidates?.[0]?.content?.parts?.[0]?.text || "No response";

      const botMessage = {
        sender: "bot",
        text: botText,
      };
      setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "❌ Error contacting Gemini API." },
      ]);
    }
  };

  const formatText = (text) => {

    if (text.includes("```")) {
      const parts = text.split("```");
      return parts.map((part, i) => {
        if (i % 2 === 1) {
          return (
            <pre className="bg-gray-900 text-green-400 p-3 rounded my-2 overflow-auto">
              <code>{part}</code>
            </pre>
          );
        } else {
          return <span dangerouslySetInnerHTML={{ __html: boldText(part) }} />;
        }
      });
    } else {
      return <span dangerouslySetInnerHTML={{ __html: boldText(text) }} />;
    }
  };

  const boldText = (text) => {
    let result = text;
    if (text.includes("**")) {
      result = text.split("**").map((item, index) => 
        index % 2 !== 0 ? `<b>${item}</b>` : item
      ).join("");
    }
    return result;
  };

  return (
    <div className="min-h-screen bg-[#f2f2f2] flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-6">Gemini Chat</h1>
      <div className="w-full max-w-2xl bg-white rounded-xl p-6 shadow-md space-y-4">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex gap-4 ${
              msg.sender === "bot" ? "flex-row" : "flex-row-reverse"
            }`}
          >
            {msg.sender === "bot" ? (
              <img src='' alt="Gemini" className="w-10 h-10 rounded-full" />
            ) : (
              <div className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center text-white font-bold">
                U
              </div>
            )}
            <div
              className={`p-4 rounded-xl max-w-[80%] whitespace-pre-wrap text-sm ${
                msg.sender === "bot" ? "bg-gray-100" : "bg-blue-100"
              }`}
            >
              {formatText(msg.text)}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 w-full max-w-2xl flex gap-4">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          className="flex-1 p-4 rounded-full border border-gray-300 shadow-sm focus:outline-none"
          placeholder="Ask Gemini something..."
        />
        <button
          onClick={handleSend}
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full shadow-md"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default GeminiChat;
