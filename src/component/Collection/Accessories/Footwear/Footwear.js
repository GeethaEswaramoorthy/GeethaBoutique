import React from "react";
import "./Footwear.css";
import { Link } from "react-router-dom";
function Footwear() {

  return (
   <div className="Footwearproducts">
 
      <div className="Footwear-cards">

        <div className="cardFootwear">
          <Link style={{ textDecoration: 'none' }} to="/Footwear">
          <img
        src="https://paragonfootwear.com/cdn/shop/products/K6018L_CRM_PT1.jpg?v=1756713465&width=1920"
          alt="Footwear"
        />
        <p>Paragon K6018L Women Sandals | Casual & Formal Sandals | Stylish, Comfortable & Durable | For Daily & Occasion Wear.</p>
        <p>  <strong>Rs.599.00</strong></p>
         </Link>
      </div>

      <div className="cardFootwear">
        <Link style={{ textDecoration: 'none' }} to="/Footwear">
        <img
          src="https://paragonfootwear.com/cdn/shop/files/PUK7033L_MRU_LS.jpg?v=1765967942&width=1920"
          alt="Footwear"
        />
       <p>Paragon Women's Slip On Sandals | Durable Dailywear Sandals.</p>
        <p>  <strong>Rs.399.00</strong></p>
        </Link>
      </div>
    

      <div className="cardFootwear">
        <Link style={{ textDecoration: 'none' }} to="/Footwear">
        <img
          src="https://paragonfootwear.com/cdn/shop/products/k1016l_pnk_1.jpg?v=1756714786&width=1920"
          alt="Footwear"
        />
        
        <p>Paragon K1016L Women Sports Shoes | Walking Running Gym Shoes | Breathable Comfortable Sole with Cushioning</p>
        <p>  <strong>Rs. 699.00</strong></p>
        </Link>
      </div>

       <div className="cardFootwear">
        <Link style={{ textDecoration: 'none' }} to="/Footwear">
        <img
          src="https://paragonfootwear.com/cdn/shop/files/PUK7030L-TBR_1.jpg?v=1757493092&width=1920"
          alt="Footwear"
        />
        
        <p>Paragon Women's Trendy Wedge Heel Sandals with Cushioned Sole and Sturdy Construction for Everyday Use</p>
        <p>  <strong>Rs. 399.00</strong></p>
        </Link>
      </div>

      <div className="cardFootwear">
        <Link style={{ textDecoration: 'none' }} to="/Footwear">
        <img
          src="https://paragonfootwear.com/cdn/shop/files/1_1.jpg?v=1756714739&width=1920"
          alt="Footwear"
        />
        
        <p>Paragon K6019L Women Sandals | Casual & Formal Sandals | Stylish, Comfortable & Durable | For Daily & Occasion Wear</p>
        <p>  <strong>Rs. 499.00</strong></p>
        </Link> 
      </div>
    

      <div className="cardFootwear">
        <Link style={{ textDecoration: 'none' }} to="/Footwear">
        <img
          src="https://paragonfootwear.com/cdn/shop/files/EVK3418L-SND_7.jpg?v=1756713121&width=1920"
          alt="Footwear"
        />
        
        <p>Paragon Women's Lightweight, Washable and Durable Beige Slippers for Everyday Use</p>
        <p>  <strong>Rs. 599.00</strong></p>
        </Link>
      </div>

    </div>
 </div>
  );
}

export default Footwear;