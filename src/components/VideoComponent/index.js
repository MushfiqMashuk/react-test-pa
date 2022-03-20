import "./videoComponent.scss";

const VideoComponent = ({ newsItem }) => {
  return (
    <div className="video_component_container">
      <img src={newsItem?.photo} alt={newsItem?.title} className="img" />
    </div>
  );
};

export default VideoComponent;
