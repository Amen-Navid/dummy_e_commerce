import  { React, useState } from "react";
import "../Styles/ShopNow.css";
import Nike1 from "../../assets/Images/ShopNowNike/Nike1.webp";
import Nike2 from "../../assets/Images/ShopNowNike/nike2.png";
import Nike3 from "../../assets/Images/ShopNowNike/nike3.png";
import Nike4 from "../../assets/Images/ShopNowNike/Nike4.png";
import Nike5 from "../../assets/Images/ShopNowNike/video.mp4";
import vidThumb from "../../assets/Images/ShopNowNike/vid-thumb.jpg"
import Signature from "../../assets/Images/ShopNowNike/sign.png";

import TopProducts from "./TopProducts";
import Header from "./Header";


function ShopNow() {
  const media = [Nike1, Nike2, Nike3, Nike4, Nike5];

  const [selectedMedia, setSelectedMedia] = useState(media[0]);
  const handleClick = (media) => {
    setSelectedMedia(media);
  };

  const [rating, setRating] = useState(0);

  const handleStarClick = (newRating) => {
    setRating(newRating);
  };

  return (
    <>

      <div className="section1">
        <div className="gallery">
        <div className="main-photo">
            {selectedMedia.endsWith('.mp4') ? (
              <video
                src={selectedMedia}
                alt="Selected Video"
                style={{width: "12rem", height: "15rem", margin:"6rem 5rem",  }}
                autoPlay
                controls
              />
            ) : (
              <img
                src={selectedMedia}
                alt="Selected Image"
                style={{ width: "15rem", height: "15rem", margin:"6rem 4rem", }}
              />
            )}
          </div>
          <div className="thumbnail">
            {media.map((thumbnail, index) => (
              <div key={index} onClick={() => handleClick(thumbnail)}>
                {thumbnail.endsWith('.mp4') ? (
                  <div className="video-thumbnail">
                    <img
                      src={vidThumb}
                      alt="Video Thumbnail"
                      style={{
                        width: "50px",
                        height: "40px",
                        // margin: "0px 10px",
                        cursor: "pointer",
                        border: selectedMedia === thumbnail ? '2px solid goldenrod' : '2px solid transparent',
                      }}
                    />
                  </div>
                ) : (
                  <img
                    src={thumbnail}
                    alt={`Thumbnail ${index + 1}`}
                    style={{
                      width: "50px",
                      height: "40px",
                      // margin: "5px",
                      cursor: "pointer",
                      border: selectedMedia === thumbnail ? '2px solid goldenrod' : '2px solid transparent',
                    }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="product-details">
          <h2>nike roshe LD 1000</h2>
          <h4>sporting casual shoe</h4>
          <div>
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                onClick={() => handleStarClick(star)}
                style={{
                  cursor: "pointer",
                  color: star <= rating ? "gold" : "gray",
                  fontSize: "24px",
                }}
              >
                &#9733;
              </span>
            ))}<span>{28}</span>
          </div>
          <div className="amount-style">
            <h3>$120 <span>Style#:18273</span></h3>
          </div>
          <div className="product-select">
                <select className="size" name="size">
                  <option value="size" hidden>size</option>
                  <option value="">31-35</option>
                  <option value="">36-40</option>
                  <option value="">41-44</option>
                </select>
                <select name="quantity" className="quantity" >
                <option value="qty" hidden>qty</option>
                <option value="">1</option>
                <option value=""> 2-5</option>
                <option value="">5 or more</option>
                </select>
                <button type="submit" className="add-to-cart">add to cart</button>
          </div>
         <p>for bulk orders, use the contact form</p>
        </div>
      </div>
      <div className="section2">
        <input type="search" name="" id=""  className="searchP"placeholder="search similar products"/>
        <img src={Signature} alt="" className="signature"/> 
        <h2>
            navid navigator's fragment collaboration with nike
        </h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero fuga, consectetur ullam aliquid totam nemo esse est porro deleniti maxime ipsum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero fuga, consectetur ullam aliquid totam nemo esse est porro deleniti maxime ipsum.</p>
      </div>
      <div className="section3">
        <img src={Nike3} alt="" style={{width:"350px", margin:"-4.5rem 0", height:"350px", transform: "rotate(-30deg)"}}/>
        <div>
          <h3>Navid's x Nike</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, delectus.</p>
          <button className="watch-button">watch the video</button>
        </div>
      </div>
      <TopProducts/>
    </>
  );
}

export default ShopNow;
