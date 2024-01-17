import React from "react";
import "../Styles/Header.css";
import logo from "../../assets/Images/logo.svg";
import { CiSearch } from "react-icons/ci";
import { AiOutlineUserAdd } from "react-icons/ai";
import { BsCart } from "react-icons/bs";
import { NavLink, Link, Outlet } from "react-router-dom";

function Header() {
  return (
    <>
      <div>
        <div className="header">
          <Link to="/" className="header-left">
            <img src={logo} />
            <h1 className="logo">Navid's</h1>
          </Link>

          <div className="header-right">
            <ul className="header-ul-1">
              <li>
                <NavLink
                  to="/"
                  exact ="true"
                  className="active-NavLink"
                >
                  home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/products"
                  className="active-NavLink"
                >
                  products
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/topProducts"
                  className="active-NavLink"
                >
                  shop
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/shopnow"
                  className="active-NavLink"
                >
                 sale!!!
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="*"
                  className="nactive-NavLink"
                >
                  features
                </NavLink>
              </li>
            </ul>

            <ul className="header-ul-2">
              <li>
                <abbr title="Search">
                  <CiSearch style={{ width: "32px", height: "32px" }} />
                </abbr>
              </li>
              <li>
                <abbr title="Login/SignUp">
                <NavLink
                  to="login"
                  className="active-NavLink"
                > <AiOutlineUserAdd style={{ width: "32px", height: "32px"}} /> </NavLink>
                </abbr>
              </li>
              <li>
                <abbr title="Checkout">
                  <BsCart style={{ width: "32px", height: "32px" }} />
                </abbr>
                <span>1</span>
              </li>
            </ul>
          </div>
        </div>
        <Outlet />
      </div>
    </>
  );
}

export default Header;
