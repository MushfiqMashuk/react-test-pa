import moment from "moment";
import "moment/locale/bn-bd";
import Description from "../Description";
import Time from "../Time";
import Title from "../Title";
import "./newsComponent.scss";

const NewsComponent = ({ newsItem }) => {
  moment.locale("bn-bd");

  const description =
    newsItem?.description?.split(" ").slice(0, 16).join(" ") + "...";
  return (
    <>
      <div className="news_component_container">
        {newsItem && (
          <>
            <Title supTitle={newsItem.supTitle}>{newsItem.title}</Title>
            <Description>{description}</Description>
            <Time>{moment(newsItem.time).fromNow()}</Time>
          </>
        )}
      </div>
    </>
  );
};

export default NewsComponent;
