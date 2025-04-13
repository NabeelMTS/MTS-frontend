import React, { useState, useEffect } from 'react';

export default function VideoModal({ videoUrl, onClose }) {
  const [iframeSrc, setIframeSrc] = useState('about:blank');

  useEffect(() => {
    if (videoUrl) {
      setIframeSrc(videoUrl);
    }
    return () => {
      setIframeSrc('about:blank');
    };
  }, [videoUrl]);

  return (
    <div className={`cs_video_popup ${videoUrl ? 'active' : ''}`}>
      <div className="cs_video_popup_overlay" onClick={onClose}></div>
      <div className="cs_video_popup_content active">
        <div className="cs_video_popup_container">
          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              className="embed-responsive-item"
              src={iframeSrc}
              title="Video Modal"
              allowFullScreen
            ></iframe>
          </div>
          <div className="cs_video_popup_close" onClick={onClose}>
            ✕
          </div>
        </div>
      </div>
    </div>
  );
}
