import React, { useState } from 'react';

const UsernamePage = () => {
  const [username, setUsername] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim() === '') {
      alert('Please enter your username');
    } else {
      // Handle form submission or navigate to another page
      console.log('Username:', username);
    }
  };

  const containerStyle = {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'linear-gradient(to bottom right, #eea8a3, #fef7f6)',
    padding: '20px',
  };

  const headingStyle = {
    color: '#dc493a',
    fontSize: '40px',
    marginBottom: '25px',
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '5px',
  };

  const inputStyle = {
    padding: '13px 18px',
    fontSize: '20px',
    border: '6px solid #dc493a',
    borderRadius: '4px',
    marginBottom: '30px',
  };

  const buttonStyle = {
    padding: '8px 16px',
    fontSize: '25px',
    backgroundColor: '#dc493a',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  };

  const textStyle = {
    fontSize: '30px',
    color: '#dc493a',
    textAlign: 'center',
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Enter Your Username</h2>
      <form style={formStyle} onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={handleUsernameChange}
          placeholder="Enter your username"
          style={inputStyle}
        />
        <button type="submit" style={buttonStyle}>
          GO
        </button>
      </form>
      <h3 style={textStyle}>Explore and Enjoy !!</h3>
    </div>
  );
};

export default UsernamePage;