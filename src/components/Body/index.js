import React from "react";
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
          <div className="left_column">4</div>
          <div className="right_column">5 </div>
        </div>
        <div className="ad_container">Ad Container</div>
      </div>
    </div>
  );
};

export default Body;
