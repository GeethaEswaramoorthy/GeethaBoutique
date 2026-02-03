import React from "react";
import "./Jeans.css";
import { Link } from "react-router-dom";
function Jeans() {

  return (
   <div className="Jeansproducts">
 
      <div className="Jeans-cards">

        <div className="cardJeans">
          <Link style={{ textDecoration: 'none' }} to="/Jeans">
          <img
        src="https://www.c-and-a.com/img/product/q_auto:good,b_rgb:FAFAFA,c_scale,w_478,dpr_2/v1769145765/productimages/2251790-3-08.jpg"
          alt="Jeans"
        />
        <p>Slim jeans - mid-rise waist - jog denim.</p>
        <p>  <strong>Rs.1200.00</strong></p>
         </Link>
      </div>

      <div className="cardJeans">
        <Link style={{ textDecoration: 'none' }} to="/Jeans">
        <img
          src="https://www.c-and-a.com/img/product/q_auto:good,b_rgb:FAFAFA,c_scale,w_478,dpr_2/v1768893295/productimages/2248699-1-08.jpg"
          alt="Jeans"
        />
       <p>Jegging jeans - high waist.</p>
        <p>  <strong>Rs.799.00</strong></p>
        </Link>
      </div>
    

      <div className="cardJeans">
        <Link style={{ textDecoration: 'none' }} to="/Jeans">
        <img
          src="https://www.c-and-a.com/img/product/q_auto:good,b_rgb:FAFAFA,c_scale,w_478,dpr_2/v1766473161/productimages/2249244-2-08.jpg"
          alt="Jeans"
        />
        
        <p>Straight jeans - high waist</p>
        <p>  <strong>Rs. 899.00</strong></p>
        </Link>
      </div>

      <div className="cardJeans">
        <Link style={{ textDecoration: 'none' }} to="/Jeans">
        <img
          src="https://www.c-and-a.com/img/product/q_auto:good,b_rgb:FAFAFA,c_scale,w_478,dpr_2/v1769435793/productimages/2252056-1-08.jpg"
          alt="Jeans"
        />
        
        <p>Straight jeans - low-rise waist</p>
        <p>  <strong>Rs. 999.00</strong></p>
        </Link>
      </div>
      
      <div className="cardJeans">
        <Link style={{ textDecoration: 'none' }} to="/Jeans">
        <img
          src="https://www.c-and-a.com/img/product/q_auto:good,b_rgb:FAFAFA,c_scale,w_478,dpr_2/v1767350656/productimages/2250707-1-08.jpg"
          alt="Jeans"
        />
        
        <p> Wide leg jeans - high waist</p>
        <p>  <strong>Rs. 1099.00</strong></p>
        </Link>
      </div>

      <div className="cardJeans">
        <Link style={{ textDecoration: 'none' }} to="/Jeans">
        <img
          src="https://www.c-and-a.com/img/product/q_auto:good,b_rgb:FAFAFA,c_scale,w_478,dpr_2/v1762855727/productimages/2252059-1-08.jpg"
          alt="Jeans"
        />
        
        <p>Bootcut jeans - low-rise waist</p>
        <p>  <strong>Rs. 1059.00</strong></p>
        </Link>
      </div>

    </div>
 </div>
  );
}

export default Jeans;