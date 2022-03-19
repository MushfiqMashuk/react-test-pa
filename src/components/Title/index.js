import "./title.scss";

const Title = ({ children, lead = false }) => {
  return (
    <>
      {lead ? (
        <h1 className="title">{children}</h1>
      ) : (
        <h3 className="title">{children}</h3>
      )}
    </>
  );
};

export default Title;
