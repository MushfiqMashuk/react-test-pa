import React from "react";
import "./body.scss";

const Body = () => {
  return (
    <div className="body_container">
      <div>
        <div className="news_container">
          <div className="lead_news" style={{ backgroundColor: "#EE4023" }}>
            <div className="lead_news_container">Lead News</div>
            <div className="image_conainer">Image</div>
          </div>
          <div className="news" style={{ backgroundColor: "#b72da0" }}>
            2
          </div>
          <div className="news" style={{ backgroundColor: "#31aebc" }}>
            3
          </div>
          <div className="news" style={{ backgroundColor: "#725c6e" }}>
            4
          </div>
          <div className="news" style={{ backgroundColor: "#5d7ad3" }}>
            5{" "}
          </div>
        </div>
        <div className="ad_container">Ad Container</div>
      </div>
    </div>
  );
};

export default Body;
