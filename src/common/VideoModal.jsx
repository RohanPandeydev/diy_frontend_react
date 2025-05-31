import React from "react";
import video from "../assets/video/videoplayback.webm";

const VideoModal = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div className="play-video-container" onClick={onClose}>
      <button aria-label="Close Video" className="close-video-btn">✖</button>
      <div className="video-wrapper">
        <video width="800" height="450" controls autoPlay>
          <source src={video} type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

// Corrected export using React.memo
export default React.memo(VideoModal);
