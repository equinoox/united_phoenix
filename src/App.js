import { useState } from 'react';
import './App.css';
import testVideo from './assets/test_video.mp4';

export default function App() {
  const [showVideo, setShowVideo] = useState(false);
  const [showButton, setShowButton] = useState(false);

  const handleTitleClick = () => {
    setShowVideo(true);
  };

  const handleVideoEnd = () => {
    setShowButton(true);
  };

  const handleSchedule = () => {
    alert('Ovde možete dodati funkcionalnost za zakazivanje termina');
  };

  return (
    <div className="container">
      {!showVideo ? (
        <div className="title-wrapper">
          <h1 className="title" onClick={handleTitleClick}>
            WHY NOT?
          </h1>
        </div>
      ) : (
        <div className="video-container">
          <video 
            className="video"
            controls
            autoPlay
            onEnded={handleVideoEnd}
          >
            <source src={testVideo} type="video/mp4" />
            Vaš pretraživač ne podržava video tagove.
          </video>
          
          {showButton && (
            <div className="overlay-container">
              <div className="video-overlay"></div>
              <button className="schedule-button" onClick={handleSchedule}>
                <span className="button-text">Zakaži termin</span>
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}