import React from "react";
import "./Gowns.css";
import { Link } from "react-router-dom";
function Gowns() {

  return (
   <div className="Gownsproducts">
 
      <div className="Gowns-cards">

        <div className="cardGowns">
          <Link style={{ textDecoration: 'none' }} to="/Gowns">
          <img
        src="https://www.ethnicplus.in/cdn/shop/files/5304PECMAIN1_400x.jpg?v=1768834138"
          alt="Gowns"
        />
        <p> Orange and Green mixed color Gowns.</p>
        <p>  <strong>Rs.1899.00</strong></p>
         </Link>
      </div>

      <div className="cardGowns">
        <Link style={{ textDecoration: 'none' }} to="/Gowns">
        <img
          src="https://www.ethnicplus.in/cdn/shop/files/WhatsAppImage2025-12-23at12.02.34_400x.jpg?v=1768827690"
          alt="Gowns"
        />
       <p>Blue and dark purple mixed Color Gowns.</p>
        <p>  <strong>Rs.1799.00</strong></p>
        </Link>
      </div>
    

      <div className="cardGowns">
        <Link style={{ textDecoration: 'none' }} to="/Gowns">
        <img
          src="https://www.ethnicplus.in/cdn/shop/files/firozi_2_400x.jpg?v=1768822008"
          alt="Gowns"
        />
        
        <p>Orange color Gowns</p>
        <p>  <strong>Rs. 1899.00</strong></p>
        </Link>
      </div>

       <div className="cardGowns">
        <Link style={{ textDecoration: 'none' }} to="/Gowns">
        <img
          src="https://www.ethnicplus.in/cdn/shop/files/5010MNDSIDE_400x.jpg?v=1769075888"
          alt="Gowns"
        />
        
        <p>Green color Gowns</p>
        <p>  <strong>Rs. 1899.00</strong></p>
        </Link>
      </div>

      <div className="cardGowns">
        <Link style={{ textDecoration: 'none' }} to="/Gowns">
        <img
          src="https://www.ethnicplus.in/cdn/shop/files/5304PNKMAIN_400x.jpg?v=1768834162"
          alt="Gowns"
        />
        
        <p>Pink color Festival Wear Gown</p>
        <p>  <strong>Rs. 1799.00</strong></p>
        </Link> 
      </div>
    

      <div className="cardGowns">
        <Link style={{ textDecoration: 'none' }} to="/Gowns">
        <img
          src="https://www.ethnicplus.in/cdn/shop/files/5013PRLMAIN1_400x.jpg?v=1769077194"
          alt="Gowns"
        />
        
        <p> Purple Floral Printed Function Wear Gown</p>
        <p>  <strong>Rs. 1799.00</strong></p>
        </Link>
      </div>

    </div>
 </div>
  );
}

export default Gowns;