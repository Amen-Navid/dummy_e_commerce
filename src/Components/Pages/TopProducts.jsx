import { React, useState } from "react";
import "../Styles/TopProducts.css";
import Headphone from "../../assets/Images/headsetBD.png";
import Watch from "../../assets/Images/iwatch.png";
import Camera from "../../assets/Images/camera.png";
import Speaker from "../../assets/Images/smartSpeaker.png";
import Controller from "../../assets/Images/controllerXBox.png";
import Products from "./Products";
import NoPage from "./NoPage";
import Footer from "./Footer";

function TopProducts() {
  const [currentTab, setCurrentTab] = useState("latest");

  const handleTabClick = (tab) => {
    setCurrentTab(tab);
  };

  const ProductItem = ({ imageSrc, starRating, details, price }) => (
    <div className="tp-item">
      <img src={imageSrc} alt="" />
      <p className={starRating === 2 ? "tp-star2" : "tp-star"}>
        &#9733; &#9733; &#9733; &#9733; &#9733;
      </p>
      <p className="tp-details">{details}</p>
      <h3 className="tp-price">${price}</h3>
    </div>
  );

  return (
    <>
      <div className="tp-nav">
        <div>
          <h2>top products</h2>
        </div>
        <div>
          <ul>
            <li
              onClick={() => handleTabClick("latest")}
              className={currentTab === "latest" ? "active-tab" : ""}
            >
              latest
            </li>
            <li
              onClick={() => handleTabClick("best")}
              className={currentTab === "best" ? "active-tab" : ""}
            >
              best sellers
            </li>
            <li
              onClick={() => handleTabClick("features")}
              className={currentTab === "features" ? "active-tab" : ""}
            >
              features
            </li>
          </ul>
        </div>
      </div>
      <div>
        {currentTab === "latest" && (
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              width: "75rem",
              marginLeft: "4rem",
              justifyContent: "space-evenly",
            }}
          >
            <ProductItem
              imageSrc={Speaker}
              starRating={1}
              details="smart speaker"
              price={60}
            />
            <ProductItem
              imageSrc={Camera}
              starRating={1}
              details="logitTech Camera"
              price={96.99}
            />
            <ProductItem
              imageSrc={Controller}
              starRating={2}
              details="x-box controller"
              price={473.99}
            />
            <ProductItem
              imageSrc={Watch}
              starRating={2}
              details="apple smart watch"
              price={1230.2}
            />
            <ProductItem
              imageSrc={Headphone}
              starRating={2}
              details="headphone"
              price={699}
            />

            <ProductItem
              imageSrc={Watch}
              starRating={2}
              details="apple smart watch"
              price={1230.2}
            />
            <ProductItem
              imageSrc={Headphone}
              starRating={2}
              details="headphone"
              price={699}
            />
            <ProductItem
              imageSrc={Camera}
              starRating={1}
              details="logitTech Camera"
              price={96.99}
            />
            <ProductItem
              imageSrc={Speaker}
              starRating={1}
              details="smart speaker"
              price={60}
            />
            <ProductItem
              imageSrc={Controller}
              starRating={2}
              details="smart speaker"
              price={123}
            />
          </div>
        )}

        {currentTab === "best" && (
          <div className="pd-div">
            <Products />
          </div>
        )}
      </div>
      {currentTab === "features" && (
        <div>
          <NoPage />
        </div>
      )}
    </>
  );
}

export default TopProducts;
