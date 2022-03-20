import Logo from "../../styles/images/logo.svg";
import "./nav.scss";

const Nav = () => {
  return (
    <div>
      <div className="nav_container">
        <img className="logo" src={Logo} alt="Logo" />
      </div>
      {/* <hr className="hr"/> */}
    </div>
  );
};

export default Nav;
