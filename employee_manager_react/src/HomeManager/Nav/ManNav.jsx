import React from "react";
import "./nav.css";
import navlogo from "../../assets/images/emp_logo.png";
import logout from "../../assets/images/1828424.png";
import { useNavigate } from "react-router-dom";

function ManNav() {
  const navigate = useNavigate();
  const HandleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <div className="nav-main">
      <div>
        <img src={navlogo} />
      </div>
      <div onClick={HandleLogout} className="logout">
        <img src={logout} />
      </div>
    </div>
  );
}

export default ManNav;
