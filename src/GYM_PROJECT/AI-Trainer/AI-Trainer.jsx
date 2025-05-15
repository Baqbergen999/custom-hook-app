import { useState } from "react";
import axios from "axios";

const GeminiChat = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setLoading(true);
    setError(null);
    setInput("");

    const trainerPrompt = `
Ты играешь роль жесткого, но доброжелательного фитнес-тренера. Отвечай мотивационно, немного грубо, но с поддержкой, как настоящий тренер. Используй эмодзи 💪🔥😤. Пример:
Пользователь: "Мне лень тренироваться"
Тренер: "Лень — твой враг! 😤 Поднимайся с дивана и делай 20 приседаний прямо сейчас! Хочешь результат — действуй! 💥💪"
Пользователь: "${input}"
`;

    try {
      const res = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyAo_H2fkN00fjm-sQkU2t2EdNDeSlx9Zeg`,
        {
          contents: [
            {
              parts: [{ text: trainerPrompt }],
            },
          ],
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const botText = res.data.candidates[0].content.parts[0].text;

      const botMessage = {
        role: "bot",
        text: botText || "Ответ пустой или неожиданной структуры.",
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      console.error(err);
      setError("Ошибка при запросе к Gemini API");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        maxWidth: "700px",
        margin: "50px auto",
        padding: "2rem",
        backgroundColor: "#f3f4f6",
        borderRadius: "16px",
        boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
        fontFamily: "Inter, sans-serif",
      }}
    >
      <h2 style={{ fontSize: "1.75rem", fontWeight: "600", marginBottom: "1.5rem" }}>
        Trainer Bot
      </h2>

      <div style={{ maxHeight: "400px", overflowY: "auto", marginBottom: "1rem", padding: "1rem", backgroundColor: "#fff", borderRadius: "12px", border: "1px solid #e5e7eb" }}>
        {messages.map((msg, idx) => (
          <div
            key={idx}
            style={{
              textAlign: msg.role === "user" ? "right" : "left",
              marginBottom: "1rem",
            }}
          >
            <div
              style={{
                display: "inline-block",
                backgroundColor: msg.role === "user" ? "#4f46e5" : "#e0e7ff",
                color: msg.role === "user" ? "white" : "#1e1b4b",
                padding: "10px 14px",
                borderRadius: "12px",
                maxWidth: "80%",
                wordWrap: "break-word",
              }}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      {error && <p style={{ color: "red", marginBottom: "1rem" }}>{error}</p>}

      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <div style={{ position: "relative", flexGrow: 1 }}>
          <input
            type="text"
            value={input}
            onChange={handleInputChange}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="Напиши тренеру..."
            className="uiverse-input"
            style={{
              width: "100%",
              padding: "12px 16px",
              borderRadius: "12px",
              border: "1px solid #d1d5db",
              fontSize: "1rem",
              outline: "none",
              transition: "0.2s ease",
              boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
            }}
          />
        </div>

        <button
          onClick={handleSend}
          disabled={loading}
          style={{
            padding: "12px 18px",
            borderRadius: "12px",
            border: "none",
            backgroundColor: "#4f46e5",
            color: "white",
            fontWeight: "500",
            cursor: loading ? "not-allowed" : "pointer",
            boxShadow: "0 4px 14px rgba(79, 70, 229, 0.4)",
            transition: "0.3s ease",
          }}
        >
          {loading ? "Отправка..." : "Отправить"}
        </button>
      </div>
    </div>
  );
};

export default GeminiChat;
