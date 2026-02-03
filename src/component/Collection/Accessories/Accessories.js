import React from "react";
import "./Accessories.css";
import { Link } from "react-router-dom";

function Accessories() {

  return (
   <div className="Accessoriesproducts">
  <h2 className="Accessories-title">Accessories Collections</h2>
      <div className="Accessories-cards">

        <div className="cardAccessories">
          <Link style={{ textDecoration: 'none' }} to="/Handbags">
          <img
        src="https://thumbs.dreamstime.com/b/set-leather-handbags-24710262.jpg"
          alt="Handbags"
        />
        <h2>Handbags</h2>
        <p>Explore our Handbags collection with elegant look.
         
      </p>
      </Link>
      </div>

      <div className="cardAccessories">
        <Link style={{ textDecoration: 'none' }} to="/Footwear">
        <img
          src="https://media.istockphoto.com/id/1279108197/photo/variety-of-womens-fashion-comfortable-shoes-of-all-seasons-on-a-light-background-top-view.jpg?s=612x612&w=0&k=20&c=_mdUMo2tsufgilqv8IQeW6hp8YjICTR8_tF-YP1Zgxk="
          alt="Footwear"
        />
        <h3>Footwear</h3>
        <p>Explore our Footwear collection with elegant look.</p>
        </Link>
      </div>
    
    </div>
 </div>
  );
}

export default Accessories;