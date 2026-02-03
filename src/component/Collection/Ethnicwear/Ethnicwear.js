import React from "react";
import "./Ethnicwear.css";
import { Link } from "react-router-dom";

function Ethnicwear() {

  return (
   <div className="Ethnicwearproducts">
  <h2 className="Ethnicwear-title">Ethnicwear Collections</h2>
      <div className="Ethnicwear-cards">

        <div className="cardEthnicwear">
          <Link style={{ textDecoration: 'none' }} to="/Gowns">
          <img
        src="https://subhvastra.in/cdn/shop/files/photo_2023-09-22_12-27-15_400x.jpg?v=1697007792"
          alt="Gowns"
        />
        <h2>Gowns</h2>
        <p>Explore our Gowns collection with elegant look.
         
      </p>
      </Link>
      </div>

      <div className="cardEthnicwear">
        <Link style={{ textDecoration: 'none' }} to="/Lehenga">
        <img
          src="https://subhvastra.in/cdn/shop/files/Stylish-Black-Sequins-Georgette-Party-Wear-Crop-Top-Lehenga-AllThingsAboutWedding-1_2048x.jpg?v=1695120729"
          alt="Lehenga"
        />
        <h3>Lehenga</h3>
        <p>Lehenga complete your look</p>
        </Link>
      </div>
    
    </div>
 </div>
  );
}

export default Ethnicwear;