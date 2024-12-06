import { useState , useRef} from "react";
import ReactPlayer from "react-player";
import '../videoSection.css' 


const VideoPlayer = () => {

  const videoFiles = [
    { id: 1, url: '../video/video-1.mp4', thumbnail: '/images/thumbnail-1.jpg' },
    { id: 2, url: '../video/video-2.mp4', thumbnail: '/images/thumbnail-2.jpg' },
    { id: 3, url: '../video/video-3.mp4', thumbnail: '/images/thumbnail-3.jpg' },
    
  ];

  const [currentVideo, setCurrentVideo] = useState(videoFiles[0].url);



  const handleThumbnailClick = (url) => {
    setCurrentVideo(url);
  };

  return(
    <div className="video-player-container">
      <div className="main-video">
        <ReactPlayer
          url={currentVideo}
          controls
          width="100%"
          height="100%"
          volume={0.4}
        />
      </div>
      <div className="video-thumbnails">
        {videoFiles.map((video) => (
          <div className="thumbnail__container">
          <img
            key={video.id}
            src={video.thumbnail}
            alt={`Thumbnail ${video.id}`}
            onClick={() => handleThumbnailClick(video.url)}
            className="thumbnail-image"
          />
          <img src='/images/thumbnail__icon.png' alt="thumbnailIcon" className="thumbnail__icon" />
          </div>
        ))}
      </div>
    </div>
  )

} 

export default VideoPlayer