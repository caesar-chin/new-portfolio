import React from "react";
import "../../styles/tailwind-animations.css";

type DownloadStatusType = {
  isDownloading: string;
};

export default function DownloadStatus({ isDownloading }: DownloadStatusType) {
  return (
    <div>
      {isDownloading === "" && <div></div>}

      {isDownloading === "downloading" && (
        <div className="flex items-center space-x-1">
          <span>Downloading</span>
          <span className="animate-fastPulse">.</span>
          <span className="animate-fastPulse">.</span>
          <span className="animate-fastPulse">.</span>
        </div>
      )}

      {isDownloading === "completed" && (
        <div className="animate-fade-out">Download completed</div>
      )}
    </div>
  );
}
