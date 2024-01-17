import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Products.css";
import Headphone from "../../assets/Images/headsetBD.png";
import Watch from "../../assets/Images/iwatch.png";
import Camera from "../../assets/Images/camera.png";
import Speaker from "../../assets/Images/smartSpeaker.png";
import Controller from "../../assets/Images/controllerXBox.png";


function Products() {
  return (
    <>
      <div className="featured-items">
        <div className="left-featured-items">
          <img src={Headphone} />
          <p className="off-price">sale up to 30% off</p>
          <p className="p-name">latest sound system</p>
          <p>
            <Link to="*" className="noshop">
              shop now
            </Link>
          </p>
        </div>
        <div className="right-featured-items">
          <div className="top-right-items">
            <div className="smart-watch">
              <img src={Watch} />
              <div style={{marginTop:"2rem"}}>
                <p>
                  <Link to="*" className="noshop">
                    shop now
                  </Link>
                </p>
                <p className="p-name">smart watch</p>
                <p className="off-price">20% off</p>
              </div>
            </div>

            <div className="camera">
              <img src={Camera} />
              <p className="p-name">hd camera</p>
            </div>
          </div>
          <div className="btm-right-items">
            <div className="speaker">
              <img src={Speaker} />
              <p>
                Smart Speaker
              </p>
            </div>
            <div className="controller">
              <div style={{ marginTop: "3rem" }}>
                <p className="off-price">game</p>
                <p className="p-name">controller</p>
                <p>
                  <Link to="*" className="noshop">
                    shop now
                  </Link>
                </p>
              </div>
              <img src={Controller} />
            </div>
          </div>
        </div>
      </div>
    </>
   
  );
}

export default Products;
