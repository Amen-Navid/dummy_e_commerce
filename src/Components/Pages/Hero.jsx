import React, { useState, useEffect } from "react";
import "../Styles/Hero.css";
import banner1 from "../../assets/Images/onyx1.png";
import banner2 from "../../assets/Images/onyx2.png";
import banner1_1 from "../../assets/Images/ShopNowNike/nike4.png";
import banner2_2 from "../../assets/Images/ShopNowNike/nike3.png";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import Products from "./Products";
import TopProducts from "./TopProducts";
import { Link } from "react-router-dom";
import Footer from "./Footer";

import Services from "./Services";

function Hero() {
  const [currentBanner, setCurrentBanner] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prevBanner) => (prevBanner === 1 ? 2 : 1));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleBannerChange = (bannerNumber) => {
    setCurrentBanner((bannerNumber) => (bannerNumber === 1 ? 2 : 1));
  };

  

  return (
    <>
      <div className="slideshow">
        <div
          className={`banner ${currentBanner === 1 ? "active" : ""}`}
          style={{ backgroundColor: "black" }}
        >
          <div className="banner-left">
            <SlArrowLeft
              onClick={() => handleBannerChange(1)}
              className="banner-button"
              style={{
                width: "50px",
                height: "122px",
                color: "white",
                marginTop: "12rem",
              }}
            />
            <img src={banner1} className="banner-image-1" />
            <img src={banner2} className="banner-image-2" />
          </div>

          <div className="banner-right">
            <h3>special discount</h3>
            <h2>latest audio system</h2>
            <h2>offer 20% off</h2>

            <Link to="*" className="shoplink" >
              shop now
            </Link>

            <SlArrowRight
              onClick={() => handleBannerChange(2)}
              style={{
                width: "50px",
                height: "122px",
                color: "white",
                position: "relative",
                float: "right",
                right: "-6rem",
                marginLeft: "20rem",
                marginTop: "-6rem",
              }}
            />
          </div>
        </div>
        <div
          className={`banner ${currentBanner === 2 ? "active" : ""}`}
          style={{ backgroundColor: "rgb(10,20,15)" }}
        >
          <div className="banner-left-2">
            <div>
              <SlArrowLeft
                onClick={() => handleBannerChange(1)}
                className="banner-button"
                style={{
                  width: "50px",
                  height: "122px",
                  color: "white",
                  marginTop: "12rem",
                }}
              />
            </div>
            <img src={banner1_1} className="banner2-image-1" />
          </div>

          <div className="banner-right-2">
            <div className="right-words">
              <h3>special discount</h3>
              <h2>nike x navid's sneakers</h2>
              <h2
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontFamily: "Tangerine",
                }}
              >
                {" "}
                20% off black friday deal
              </h2>
              <Link to="/shopNow" className="shoplink2">
                shop now
              </Link>
            </div>

            <img src={banner2_2} className="banner2-image-2" />
            <div>
              <SlArrowRight
                onClick={() => handleBannerChange(2)}
                style={{
                  width: "50px",
                  height: "122px",
                  color: "white",
                  position: "absolute",
                  float: "right",
                  right: "0",
                  marginRight: "1rem",
                  marginTop: "-7.9rem",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <Services/>
      <div className="pd">
      <Products />
      </div>
      <TopProducts />
    </>
  );
}

export default Hero;
