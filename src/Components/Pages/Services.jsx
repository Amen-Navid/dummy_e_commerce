import React from 'react'
import "../Styles/Services.css"
import { CiDeliveryTruck, CiTimer } from "react-icons/ci";
import { RiCustomerService2Line } from "react-icons/Ri";
function Services() {
  return (
    <>
       <div className="service-div">
        <div className="service-box">
          <CiDeliveryTruck
            style={{ color: "goldenrod", width: "5rem", height: "2.5rem" }}
          />
          <span className="service-text">free delivery anywhere</span>
          <br />
          <p>No matter the location, we deliver.</p>
        </div>
        <div className="service-box">
          <RiCustomerService2Line
            style={{ color: "goldenrod", width: "5rem", height: "2.5rem" }}
          />
          <span className="service-text">24/7 customer support</span>
          <br />
          <p>Always here to help with your needs.</p>
        </div>
        <div className="service-box">
          <CiTimer
            style={{ color: "goldenrod", width: "5rem", height: "2.5rem" }}
          />
          <span className="service-text">timely delivery of orders</span>
          <br />
          <p>Order takes maximum 3 days delivery.</p>
        </div>
      </div>
    </>
  )
}

export default Services
