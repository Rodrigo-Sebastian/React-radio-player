import React from 'react';

const Station = ({ name, image, color, streamUrl }) => {
  return (
    <div style={{ border: `2px solid ${color}`, padding: '10px', margin: '10px', width: '300px' }}>
      <img src={image} alt={name} style={{ maxWidth: '100%' }} />
      <h3>{name}</h3>
      <audio controls onPlay={() => console.log('Audio is playing')} onError={(e) => console.error('Audio error:', e)}>
      <source src={streamUrl} type="audio/mpeg" />
      Your browser does not support the audio tag.
      </audio>
    </div>
  );
};

export default Station;
