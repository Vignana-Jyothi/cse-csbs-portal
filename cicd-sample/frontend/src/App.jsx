import React, { useState, useEffect } from 'react';

function App() {
  const [dateTime, setDateTime] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchDateTime = async () => {
    setLoading(true);
    try {
      const res = await fetch('http://localhost:3000/datetime');
      const data = await res.json();
      setDateTime(data);
    } catch (error) {
      console.error('Failed to fetch date and time:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome!</h1>
      <button style={styles.button} onClick={fetchDateTime}>
        {loading ? 'Loading...' : 'Show Current Date & Time'}
      </button>

      {dateTime && (
        <div style={styles.card}>
          <h2 style={styles.cardTitle}>Current Date & Time</h2>
          <p style={styles.info}>📅 Date: {dateTime.date}</p>
          <p style={styles.info}>⏰ Time: {dateTime.time}</p>
          <p style={styles.info}>🧭 ISO: {dateTime.iso}</p>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#e0f7fa',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
  },
  title: {
    fontSize: '2.5rem',
    marginBottom: '30px',
    color: '#00796b',
  },
  button: {
    padding: '15px 25px',
    fontSize: '1.2rem',
    backgroundColor: '#00796b',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    boxShadow: '0 4px 6px rgba(0,0,0,0.2)',
    transition: 'background-color 0.3s ease',
  },
  card: {
    marginTop: '40px',
    backgroundColor: '#ffffff',
    padding: '30px',
    borderRadius: '12px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    textAlign: 'center',
  },
  cardTitle: {
    fontSize: '1.8rem',
    marginBottom: '20px',
    color: '#333',
  },
  info: {
    fontSize: '1.2rem',
    color: '#555',
    margin: '8px 0',
  },
};

export default App;
