import "./title.scss";

const Title = ({ children, lead = false, supTitle = "" }) => {
  return (
    <>
      {lead ? (
        <h1 className="title">
          <a href="#">
            {supTitle.length > 0 && (
              <span className="sup_title">{`${supTitle} / `}</span>
            )}{" "}
            {children}
          </a>
        </h1>
      ) : (
        <h3 className="title">
          <a href="#">
            {supTitle.length > 0 && (
              <span className="sup_title">{supTitle}</span>
            )}{" "}
            {children}
          </a>
        </h3>
      )}
    </>
  );
};

export default Title;
