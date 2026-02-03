import React from "react";
import "./Westernwear.css";
import { Link } from "react-router-dom";
import Topswearheading from "../../../Asset/Topswearheading.png"

function Westernwear() {

  return (
    <div className="westernproducts">
      <h2 className="western-title">Western Wear Collections</h2>
      <div className="western-cards">

        <div className="cardwestern">
          <Link style={{ textDecoration: 'none' }} to="/Topswear">
            <img
              src={Topswearheading}
              alt="Topswear"
            />
            <h2>Topswear</h2>
            <p>Explore our Topswear collection with elegant look.

            </p>
          </Link>
        </div>

        <div className="cardwestern">
          <Link style={{ textDecoration: 'none' }} to="/Jeans">
            <img
              src="https://media.istockphoto.com/id/1661359005/video/shopping-buying-clothes-close-up-buyer-is-shopping-in-clothing-store-process-of-choosing.avif?s=640x640&k=20&c=bOY2KU4WMv6211aSLnS_UeV_BMqxJGPdEHdRJQ_hJ9Y="
              alt="Jeans"
            />
            <h3>Jeans</h3>
            <p>Jeans complete your look</p>
          </Link>
        </div>

      </div>
    </div>
  );
}

export default Westernwear;