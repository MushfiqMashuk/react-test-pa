import moment from "moment";
import ImageComponent from "../ImageComponent";
import Time from "../Time";
import Title from "../Title";
import "./newsComponentWithPhoto.scss";

const NewsComponentWithPhoto = ({ newsItem }) => {
  moment.locale("bn-bd");
  return (
    <>
      <div className="news_component_with_photo_container">
        <div className="news_container_with_photo">
          <ImageComponent
            src={newsItem?.photo}
            alt={newsItem?.title}
            className="img"
          />
          <Title supTitle={newsItem?.supTitle}>{newsItem?.title}</Title>
        </div>
        <Time>{moment(newsItem?.time).fromNow()}</Time>
      </div>
    </>
  );
};

export default NewsComponentWithPhoto;
