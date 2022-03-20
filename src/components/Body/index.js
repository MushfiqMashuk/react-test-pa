import { useEffect, useState } from "react";
import Ad from "../../styles/images/ad-banner.jpg";
import SidebarAdImage from "../../styles/images/sidebar_ad.jpg";
import ImageComponent from "../ImageComponent";
import NewsComponent from "../NewsComponent";
import NewsComponentWithPhoto from "../NewsComponentWithPhoto";
import ReadNews from "../ReadNews";
import SidebarAd from "../SidebarAd";
import VideoComponent from "../VideoComponent";
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
        console.log(data);

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
                <NewsComponent newsItem={newsData[0]} />
                <ImageComponent
                  src={newsData[0]?.photo}
                  className="lead_news_image_conainer"
                />
              </div>
              <div className="side_ad">
                <SidebarAd src={SidebarAdImage} alt="Sidebar Ad" />
              </div>
              <div className="second_news">
                <NewsComponent newsItem={newsData[1]} />
              </div>
              <div className="left_column">
                <div className="news_without_photo">
                  {newsData &&
                    newsData
                      .slice(2, 5)
                      .map((news) => (
                        <NewsComponent newsItem={news} key={news.id} />
                      ))}
                </div>
                <div className="news_with_photo">
                  {newsData &&
                    newsData
                      .slice(5, 11)
                      .map((news) => (
                        <NewsComponentWithPhoto newsItem={news} key={news.id} />
                      ))}
                </div>
              </div>
              <div className="right_column">
                <VideoComponent newsItem={newsData[12]} />
                <NewsComponentWithPhoto newsItem={newsData[11]} />
                <ReadNews />
              </div>
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
