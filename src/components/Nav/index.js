import Logo from "../../logo.svg";
import "./nav.scss";

const Nav = () => {
  return (
    <div className="nav-container">
      <img className="logo" src={Logo} alt="Logo" />
      <hr className="hr"/>
    </div>
  );
};

export default Nav;
