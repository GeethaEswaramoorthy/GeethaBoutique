import React from "react";
import "./Kurtis.css";
import { Link } from "react-router-dom";

function kurtis() {

  return (
   <div className="kurtisproducts">
  <h2 className="kurtis-title">kurtis Collections</h2>
      <div className="kurtis-cards">

        <div className="cardkurtis">
          <Link style={{ textDecoration: 'none' }} to="/Kurta">
          <img
        src="https://assets0.mirraw.com/images/8361951/1H9A8780b_zoom.jpg?1602680955"
          alt="Kurta"
        />
        <h2>Kurta</h2>
        <p>Explore our Kurta collection with elegant look.
         
      </p>
      </Link>
      </div>

      <div className="cardkurtis">
        <Link style={{ textDecoration: 'none' }} to="/Kurtasets">
        <img
          src="https://madrassarees.com/cdn/shop/files/Kotasilksalwarsetwithfrenchknotembroiderywork_1.webp?v=1759904049"
          alt="Kurtasets"
        />
        <h3>Kurtasets</h3>
        <p>Kurtasets complete your look</p>
        </Link>
      </div>
    
    </div>
 </div>
  );
}

export default kurtis;