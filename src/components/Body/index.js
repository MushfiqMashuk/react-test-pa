import { useEffect, useState } from "react";
import Ad from "../../styles/images/ad-banner.jpg";
import ImageComponent from "../ImageComponent";
import NewsComponent from "../NewsComponent";
import "./body.scss";

const Body = () => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch("http://localhost:4000/news");

        const data = await response.json();

        setLoading(false);
        setNewsData(data);
      } catch (err) {
        setLoading(false);
        setError("There is a server-side error!");
      }
    };

    getData();
  }, []);

  return (
    <>
      {error && <h3>{error}</h3>}
      {loading && <h3>Loading...</h3>}
      {!loading && !error && (
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
                  <NewsComponent newsItem={newsData[0]} />
                  <NewsComponent newsItem={newsData[1]} />
                  <NewsComponent newsItem={newsData[2]} />
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
      )}
    </>
  );
};

export default Body;
