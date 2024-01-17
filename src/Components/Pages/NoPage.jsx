import React from "react";
import { Link } from "react-router-dom";
import "../Styles/NoPage.css";
import { HiMiniQuestionMarkCircle } from "react-icons/hi2";


function NoPage() {
  return (
    <>
        <div className="mainbox">
          <div className="err">4
        <HiMiniQuestionMarkCircle className="far"/>
         4</div>
          <div className="msg">
          We're fairly sure that page used to be here, but seems to have gone
        missing. We do apologise on it's behalf.
            <p>
              Let's go <span>
              <Link to="/" className="go_home">
                home
              </Link>{" "}</span>
              and try from there.
            </p>
          </div>
        </div>
    </>
  );
}

export default NoPage;
