import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <div className="welcome">
      <div className="topbar">
        <div className="logo">
          👑<span className="logo-text">L-MAJESTY</span>
        </div>
        <ul className="top-nav">
          <NavLink to="/Homepage">Home</NavLink>
          <NavLink to="Aboutpage">About</NavLink>
          <NavLink to='Impacts'>Impacts</NavLink>
          <NavLink to="Votepage">Vote</NavLink>
        </ul>
        <li className="account">Login</li>
      </div>
      <div className="caption">
        <h1 className="caption-text">
          Unlock your hidden potential <br></br>with <span>l-majesty</span>
        </h1>
        <div className="tag">
          <i>
            change your preferences refuse consenting. Please note that some
            processing of your <br></br>personal data may not require your
            consent
          </i>
        </div>
        <div className="btn">
          <button className="action1">Unlock</button>
          <button className="action">SignUp</button>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
