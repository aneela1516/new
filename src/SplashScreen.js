import React from 'react';
import { useNavigate } from 'react-router-dom';


const SplashScreen = () => {
  const navigate = useNavigate();

  const handleStartClick = () => {
    navigate('/UsernamePage');
  };

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(to bottom right, #eea8a3, #fef7f6)',
      }}
    >
      <h1 style={{ fontSize: '50px', color: '#dc493a', marginBottom: '30px' }}>
        SAATHI
      </h1>
      <div style={{ textAlign: 'center' }}>
        <h2 style={{ fontSize: '40px', color: '#dc493a', marginBottom: '10px' }}>
          FINANCIAL LITERACY
        </h2>
        <p style={{ fontSize: '35px', fontWeight: 'bold', marginBottom: '40px' }}>
          Let's Start Learning About Financial Literacy
        </p>
        <button
          style={{
            padding: '10px 20px',
            fontSize: '35px',
            fontWeight: 'bold',
            backgroundColor: '#dc493a',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
          onClick={handleStartClick}
        >
          START
        </button>
      </div>
    </div>
  );
};

export default SplashScreen;