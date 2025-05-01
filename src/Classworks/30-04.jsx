import { useState } from 'react';
import axios from 'axios';

const GeminiSearch = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSearch = async () => {
    if (!input.trim()) return;

    setLoading(true);
    setError(null);
    setResponse('');

    try {
      const res = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyAo_H2fkN00fjm-sQkU2t2EdNDeSlx9Zeg`,
        {
          contents: [
            {
              parts: [{ text: input }],
            },
          ],
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      const generatedText = res.data.candidates[0].content.parts[0].text;

      if (generatedText) {
        setResponse(generatedText);
      } else {
        setResponse('Ответ пустой или неожиданной структуры.');
      }
    } catch (err) {
      console.error(err);
      setError('Ошибка при запросе к Gemini API');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        maxWidth: '600px',
        margin: '50px auto',
        padding: '2rem',
        backgroundColor: '#f9fafb',
        borderRadius: '16px',
        boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
        fontFamily: 'Inter, sans-serif',
      }}
    >
      <h2 style={{ fontSize: '1.75rem', fontWeight: '600', marginBottom: '1rem' }}>
        Gemini Search
      </h2>

      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
          placeholder="Введите запрос..."
          style={{
            flexGrow: 1,
            padding: '10px 14px',
            borderRadius: '8px',
            border: '1px solid #ccc',
            fontSize: '1rem',
            outline: 'none',
            transition: 'border 0.2s ease',
          }}
        />
        <button
          onClick={handleSearch}
          disabled={loading}
          style={{
            padding: '10px 18px',
            borderRadius: '8px',
            border: 'none',
            backgroundColor: '#4f46e5',
            color: 'white',
            fontWeight: '500',
            cursor: loading ? 'not-allowed' : 'pointer',
            transition: 'background 0.2s ease',
          }}
        >
          {loading ? 'Загрузка...' : 'Поиск'}
        </button>
      </div>

      {error && (
        <p style={{ color: 'red', marginTop: '1rem', fontSize: '0.95rem' }}>{error}</p>
      )}

      {response && (
        <div
          style={{
            marginTop: '1.5rem',
            backgroundColor: '#ffffff',
            padding: '1rem',
            borderRadius: '12px',
            border: '1px solid #e5e7eb',
            whiteSpace: 'pre-wrap',
            lineHeight: '1.6',
            fontSize: '1rem',
            color: '#111827',
          }}
        >
          <h3 style={{ fontWeight: '600', marginBottom: '0.5rem' }}>Ответ:</h3>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
};

export default GeminiSearch;
