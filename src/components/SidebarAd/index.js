import "./sidebarAd.scss";

const SidebarAd = ({ src, alt }) => {
  return (
    <div className="sidebar_ad_container">
      <img src={src} alt={alt} className="img"/>
    </div>
  );
};

export default SidebarAd;
