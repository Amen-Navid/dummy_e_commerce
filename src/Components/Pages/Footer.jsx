import React from "react";
import { FaFacebook, FaInstagram, FaGithub, FaMailBulk } from "react-icons/fa";
import "../Styles/Footer.css"
import { Outlet } from "react-router-dom";


function Footer() {
  return (
    <>
    <Outlet />
      <div className="footer">
        <div className="left-footer">made by navid &copy;{new Date().getFullYear()}</div>
        <div className="mid-footer">
         <a href="http://www.facebook.com/navigator27" target="_blank"> <FaFacebook /></a>
         <a href="mailto:amenasemota@gmail.com"><FaMailBulk /></a><a href="http://www.instagram.com/amen_navid" target="_blank">
          <FaInstagram /></a>
          <a href="https://github.com/Amen-Navid" target="_blank"><FaGithub /></a>
        </div>
        <div className="right-footer">shop with navid&trade;</div>
      </div>
      
    </>
  );
}

export default Footer;
