
import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import EventCard from './Components/EventCard';
import LoadingSpinner from './Components/EventModal';

const mockData = [
  { id: 1, name: "Dil luminati", date: "24-11-2024", location: "New Delhi", description: "Diljit Donsanjh's music concert."},
  { id: 2, name: "Karan Aujla Concert", date: "31-10-2024", location: "San Francisco", description: "Karan Aujla's music concert."},
  { id: 3, name: "Stand-up Comedy", date: "15-12-2024", location: "Chandigarh", description: "Stand-up comedy by Anubhav Singh Bassi."},
];

function App() {
  const [theme, setTheme] = useState('light');
  const [loading, setLoading] = useState(true); 

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); 
    }, 2000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`app ${theme}`}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className="events-container">
          {mockData.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
