import React, { useState } from 'react';

const SchedulePage = () => {
  const [inputValue, setInputValue] = useState('');
  const [outputValue, setOutputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSchedule = () => {
    // Add your scheduling logic here based on the input
    // For demonstration purposes, let's just echo the input
    setOutputValue(`Scheduled: ${inputValue}`);
  };

  return (
    <div style={{ 
      backgroundColor: 'lightblue',
      padding: '20px',
      textAlign: 'center',
      minHeight: '100vh',
      background: 'linear-gradient(90deg, rgba(111,58,180,1) 0%, rgba(148,187,233,1) 69%, rgba(252,176,69,1) 100%)',
    }}>
      <h1 style={{ color: '#333' }}>Schedule Page</h1>
      
      <label style={{ color: '#333' }}>
        Enter your schedule:
        <input type="text" value={inputValue} onChange={handleInputChange} style={{ marginLeft: '10px', padding: '5px', borderRadius: '5px', border: '1px solid #ccc' }} />
      </label>
      
      <br />
      
      <button onClick={handleSchedule} style={{ backgroundColor: '#4caf50', color: '#333', border: 'none', borderRadius: '5px', cursor: 'pointer', padding: '10px 20px', fontSize: '1rem', marginTop: '10px' }}>Schedule</button>

      <div style={{ marginTop: '20px', color: '#333' }}>
        <strong>Output:</strong> {outputValue}
      </div>
    </div>
  );
}

export default SchedulePage;
