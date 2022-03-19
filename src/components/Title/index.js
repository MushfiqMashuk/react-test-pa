import "./title.scss";

const Title = ({ children, lead = false, supTitle = "" }) => {
  return (
    <>
      {lead ? (
        <h1 className="title">
          {supTitle.length > 0 && (
            <span className="sup_title">{`${supTitle} / `}</span>
          )}{" "}
          {children}
        </h1>
      ) : (
        <h3 className="title">
          {supTitle.length > 0 && <span className="sup_title">{supTitle}</span>}{" "}
          {children}
        </h3>
      )}
    </>
  );
};

export default Title;
