import { useState, useEffect } from 'react';
import './App.css';
import testVideo from './assets/test2_video.mp4';

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
    window.location.href = 'https://calendly.com/united-phx/college-mentor';
  };

  // Blokira skrolovanje kada se video prikaže
  useEffect(() => {
    if (showVideo) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    // Cleanup kada se komponenta unmountuje
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [showVideo]);

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
            playsInline
            webkit-playsinline="true"
            x5-playsinline="true"          
            autoPlay
            onEnded={handleVideoEnd}
          >
            <source src={testVideo} type="video/mp4" />
            Vaš pretraživač ne podržava video tagove.
          </video>
          
          
          <div className="video-blocker"></div>
          
          {showButton && (
            <div className="overlay-container">
              <div className="video-overlay"></div>
              <button className="schedule-button" onClick={handleSchedule}>
                <span className="button-text">ZAKAŽI TERMIN</span>
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}