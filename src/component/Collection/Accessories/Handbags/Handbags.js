import React from "react";
import "./Handbags.css";
import { Link } from "react-router-dom";
function Handbags() {

  return (
   <div className="Handbagsproducts">
 
      <div className="Handbags-cards">

        <div className="cardHandbags">
          <Link style={{ textDecoration: 'none' }} to="/Handbags">
          <img
        src="https://madrassarees.com/cdn/shop/files/Premiumquiltlaptopbagms7_7.webp?v=1762760986"
          alt="Handbags"
        />
        <p> MS7 Quilted European-Style Laptop Bag – Blue Tile Print.</p>
        <p>  <strong>Rs.899.00</strong></p>
         </Link>
      </div>

      <div className="cardHandbags">
        <Link style={{ textDecoration: 'none' }} to="/Handbags">
        <img
          src="https://madrassarees.com/cdn/shop/files/Premiumquiltlaptopbagms7_4.webp?v=1762760986"
          alt="Handbags"
        />
       <p>MS7 Quilted European-Style Laptop Bag – Safari Yellow.</p>
        <p>  <strong>Rs.899.00</strong></p>
        </Link>
      </div>
    

      <div className="cardHandbags">
        <Link style={{ textDecoration: 'none' }} to="/Handbags">
        <img
          src="https://madrassarees.com/cdn/shop/files/Premiumquiltlaptopbagms7_2.webp?v=1762760986"
          alt="Handbags"
        />
        
        <p>MS7 Quilted European-Style Laptop Bag – Floral Ivory</p>
        <p>  <strong>Rs. 899.00</strong></p>
        </Link>
      </div>

       <div className="cardHandbags">
        <Link style={{ textDecoration: 'none' }} to="/Handbags">
        <img
          src="https://gulabchand.com/cdn/shop/files/BAG-89-D.jpg?v=1726209466&width=500"
          alt="Handbags"
        />
        
        <p>Block Printed Cotton Bag For Women</p>
        <p>  <strong>Rs. 799.00</strong></p>
        </Link>
      </div>

      <div className="cardHandbags">
        <Link style={{ textDecoration: 'none' }} to="/Handbags">
        <img
          src="https://gulabchand.com/cdn/shop/files/BAG-90-A.jpg?v=1726209466&width=800"
          alt="Handbags"
        />
        
        <p>Block Printed Cotton Bag For Women</p>
        <p>  <strong>Rs. 799.00</strong></p>
        </Link> 
      </div>
    

      <div className="cardHandbags">
        <Link style={{ textDecoration: 'none' }} to="/Handbags">
        <img
          src="https://gulabchand.com/cdn/shop/files/BAG-85-D.jpg?v=1726209449&width=800"
          alt="Handbags"
        />
        
        <p>Block Printed Cotton Bag For Women</p>
        <p>  <strong>Rs. 799.00</strong></p>
        </Link>
      </div>

    </div>
 </div>
  );
}

export default Handbags;