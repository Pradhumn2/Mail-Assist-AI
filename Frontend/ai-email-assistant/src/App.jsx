import './App.css'
import { useState } from 'react';
import axios from 'axios';

function App() {

  const [emailContent, setEmailContent] = useState('');
  const [tone, setTone] = useState('');
  const [generatedReply, setGeneratedReply] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:8080/api/email/generate",
        {
          emailContent,
          tone
        }
      );

      setGeneratedReply(
        typeof response.data === 'string'
          ? response.data
          : JSON.stringify(response.data)
      );

    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedReply);
  };

  return (
    <div className="app">

      <div className="card">

        <h1 className="title">
          MailMind AI
        </h1>

        <p className="subtitle">
          Generate professional AI-powered email replies instantly
        </p>

        <div className="form-group">

          <label>Email Content</label>

          <textarea
            rows="8"
            placeholder="Paste your email content here..."
            value={emailContent}
            onChange={(e) => setEmailContent(e.target.value)}
          />

        </div>

        <div className="form-group">

          <label>Select Tone</label>

          <select
            value={tone}
            onChange={(e) => setTone(e.target.value)}
          >
            <option value="">None</option>
            <option value="professional">Professional</option>
            <option value="casual">Casual</option>
            <option value="friendly">Friendly</option>
          </select>

        </div>

        <button
          className="generate-btn"
          onClick={handleSubmit}
          disabled={!emailContent || loading}
        >
          {loading ? "Generating..." : "Generate Reply"}
        </button>

        {generatedReply && (
          <div className="reply-section">

            <label>Generated Reply</label>

            <textarea
              rows="8"
              value={generatedReply}
              readOnly
            />

            <button
              className="copy-btn"
              onClick={copyToClipboard}
            >
              Copy to Clipboard
            </button>

          </div>
        )}

      </div>

    </div>
  )
}

export default App