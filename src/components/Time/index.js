import "./time.scss";

const Time = ({ children }) => {
  return (
    <div className="time_container">
      <time>{children}</time>
    </div>
  );
};

export default Time;
