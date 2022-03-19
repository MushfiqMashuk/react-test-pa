import React from "react";
import Ad from "../../styles/images/ad-banner.jpg";
import ImageComponent from "../ImageComponent";
import Title from "../Title";
import "./body.scss";

const Body = () => {
  return (
    <div className="body_container">
      <div>
        <div className="news_container">
          <div className="lead_news">
            <div className="lead_news_container">Lead News</div>
            <div className="image_conainer">Image</div>
          </div>
          <div className="side_ad">2</div>
          <div className="second_news">3</div>
          <div className="left_column">
            <div className="news_without_photo">
              <Title>This is a title</Title>
            </div>
            <div className="news_with_photo"></div>
          </div>
          <div className="right_column">5 </div>
        </div>
        <div className="ad_container">
          <ImageComponent src={Ad} alt="Ad Banner" className="img" />
        </div>
      </div>
    </div>
  );
};

export default Body;
