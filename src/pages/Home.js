import React from 'react';
import { Link } from 'react-router-dom';
import lotusImage from './lotus.png';

const Home = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      background: 'rgb(238,174,202)',
      background: 'radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)',
      fontFamily: 'Arial, sans-serif',
    }}>
      <div style={{ textAlign: 'center' }}>
        <img src={lotusImage} alt="Lotus" style={{ width: '100px', height: '100px', borderRadius: '50%' }} />
        <h1 style={{ color: '#4caf50', marginTop: '20px', fontSize: '2.5rem' }}>Welcome to Wellness AI</h1>
        <p style={{ color: '#333', fontSize: '1.2rem', marginTop: '20px' }}>Embrace wellness and relaxation with our AI-powered tools</p>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
          <Link to="/memepage">
            <button style={{ marginRight: '20px', padding: '10px 20px', backgroundColor: '#4caf50', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '1.2rem' }}>Meme Generator</button>
          </Link>
          <Link to="/schedule">
            <button style={{ padding: '10px 20px', backgroundColor: '#4caf50', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '1.2rem' }}>Schedule Wellness</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
