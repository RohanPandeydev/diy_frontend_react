import React from "react";

const VideoModal = ({ open, onClose }) => {
  if (!open) return null;

  const handleContainerClick = (e) => {
    // Close only if clicking outside video-wrapper
    if (e.target.classList.contains("play-video-container")) {
      onClose();
    }
  };

  return (
    <div className="play-video-container" onClick={handleContainerClick}>
      <button aria-label="Close Video" className="close-video-btn" onClick={onClose}>✖</button>
      <div className="video-wrapper">
        <video width="800" height="450" controls autoPlay>
          <source src={"https://diyprefab.com/video/dummyvideo.mp4"} type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default React.memo(VideoModal);
