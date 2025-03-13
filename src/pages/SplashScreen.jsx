import React from 'react';
import { useNavigate } from 'react-router-dom';

const SplashScreen = () => {
  const navigate = useNavigate();

  const handleVideoEnded = () => {
    navigate('/home', { replace: true });
  };

  return (
    <div className="relative w-full h-screen">
      <video
        autoPlay
        playsInline
        muted
        onEnded={handleVideoEnded}
        className="w-full h-full object-cover"
      >
        <source
          src="https://res.cloudinary.com/dbbanqws0/video/upload/v1739743392/WhatsApp_Video_2025-02-17_at_03.25.02_c2b0c0fc_tnq2cy.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default SplashScreen;