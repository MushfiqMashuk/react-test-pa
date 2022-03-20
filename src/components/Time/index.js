import "./time.scss";

const Time = ({ children, ...props }) => {
  return (
    <div className="time_container" {...props}>
      {children}
    </div>
  );
};

export default Time;
