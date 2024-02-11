import React, { useState, useEffect } from 'react';
import Station from './components/station';
import './app.css';

const App = () => {
  const [stations, setStations] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchStations = async () => {
      try {
        const response = await fetch('https://api.sr.se/api/v2/channels?format=json&size=100');
        const data = await response.json();
        setStations(data.channels);
      } catch (error) {
        console.error('Error fetching stations:', error);
      }
    };

    fetchStations();
  }, []);

  const filterStations = () => {
    return stations.filter((station) => {
      return station.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
  };

  return (
    <div className='radio-container'>
      <h1 className='radio-title'>Radio Player</h1>

      {}
      <input className='radio-input'
        type="text"
        placeholder="Sök station..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', margin: 'auto' }}>
        {}
        {filterStations().map((station) => (
          <Station
            key={station.id}
            name={station.name}
            image={station.image}
            color={station.color}
            streamUrl={station.liveaudio.url}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
