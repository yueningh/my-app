// MemePage.js
import React, { useState } from 'react';

const MemePage = () => {
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const [memeImage, setMemeImage] = useState(null);

  const handleInputChange = (event, setTextFunction) => {
    setTextFunction(event.target.value);
  };

  const generateMeme = () => {
    // Add your meme generation logic here
    // For demonstration purposes, let's assume there's a meme API that returns an image URL
    const apiUrl = `https://api.example.com/meme?top=${encodeURIComponent(topText)}&bottom=${encodeURIComponent(bottomText)}`;
    
    // Fetch meme image
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => setMemeImage(data.url))
      .catch(error => console.error('Error fetching meme:', error));
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      minHeight: '100vh',
      padding: '20px',
      textAlign: 'center',
      background: 'rgb(34,151,195)',
      background: 'linear-gradient(to bottom, #22bce0, #fdbb2d)',
      }}>
      <h1 style={{ color: '#333' }}>Meme Generator</h1>
      
      <label style={{ color: '#333', marginBottom: '10px', display: 'block' }}>
        Top Text:
        <input type="text" value={topText} onChange={(e) => handleInputChange(e, setTopText)} style={{ marginLeft: '30px', padding: '5px', borderRadius: '5px', border: '1px solid #ccc' }} />
      </label>
      
      <label style={{ color: '#333', marginBottom: '10px', display: 'block' }}>
        Bottom Text:
        <input type="text" value={bottomText} onChange={(e) => handleInputChange(e, setBottomText)} style={{ marginLeft: '5px', padding: '5px', borderRadius: '5px', border: '1px solid #ccc' }} />
      </label>

      <button style={{ backgroundColor: '#4caf50', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', padding: '10px 20px', fontSize: '1rem', marginTop: '20px' }} onClick={generateMeme}>Generate Meme</button>

      {memeImage && (
        <div style={{ marginTop: '20px' }}>
          <img src={memeImage} alt="Generated Meme" style={{ maxWidth: '100%' }} />
        </div>
      )}
    </div>
  );
}

export default MemePage;
