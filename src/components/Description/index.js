import "./description.scss";

const Description = ({ children }) => {
  return (
    <p className="description_container">
      <a href="#">{children}</a>
    </p>
  );
};

export default Description;
