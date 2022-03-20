import "./time.scss";

const Time = ({ children, ...props }) => {
  return (
    <div className="time_container" {...props}>
      <time>{children}</time>
    </div>
  );
};

export default Time;
