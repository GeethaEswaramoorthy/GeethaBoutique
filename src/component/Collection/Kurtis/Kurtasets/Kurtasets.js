import React from "react";
import "./Kurtasets.css";
import { Link } from "react-router-dom";
function Kurtasets() {

  return (
   <div className="Kurtasetsaproducts">
 
      <div className="Kurtasets-cards">

        <div className="cardKurtasets">
          <Link style={{ textDecoration: 'none' }} to="/Kurtasets">
          <img
        src="https://kapdavilla.com/images/product/sub_images/2024/08/safa-fashion-fab-1277-pakistani-top-bottom-dupatta-pair-wholesale-3-2024-08-07_16_12_27.jpeg"
          alt="Kurtasets"
        />
        <p> Red and blue color Kurtasets.</p>
        <p>  <strong>Rs.899.00</strong></p>
         </Link>
      </div>

      <div className="cardKurtasets">
        <Link style={{ textDecoration: 'none' }} to="/Kurtasets">
        <img
          src="https://kapdavilla.com/images/product/sub_images/2024/08/safa-fashion-fab-1268-formal-wear-top-bottom-dupatta-sets-pakistani-concept-3-2024-08-03_16_11_17.jpeg"
          alt="Kurtasets"
        />
       <p>Green Collar Kurtasets.</p>
        <p>  <strong>Rs.799.00</strong></p>
        </Link>
      </div>
    

      <div className="cardKurtasets">
        <Link style={{ textDecoration: 'none' }} to="/Kurtasets">
        <img
          src="https://www.anivartee.com/cdn/shop/files/SLC001551A.jpg?v=1713788665&width=1080"
          alt="Kurtasets"
        />
        
        <p>Purple Collar Kurtasets</p>
        <p>  <strong>Rs. 899.00</strong></p>
        </Link>
      </div>

       <div className="cardKurtasets">
        <Link style={{ textDecoration: 'none' }} to="/Kurtasets">
        <img
          src="https://surtisilk.com/cdn/shop/products/photo_2023-04-13_03-01-59_512x.jpg?v=1681336685"
          alt="Kurtasets"
        />
        
        <p>Sandle and pink color Kurtasets</p>
        <p>  <strong>Rs. 899.00</strong></p>
        </Link>
      </div>

      <div className="cardKurtasets">
        <Link style={{ textDecoration: 'none' }} to="/Kurtasets">
        <img
          src="https://kapdavilla.com/images/product/sub_images/2024/06/safa-fashion-fab-1241-pakistani-top-bottom-dupatta-sets-wholesale-0-2024-06-14_15_02_54.jpeg"
          alt="Kurtasets"
        />
        
        <p>White and black Collar Kurtasets</p>
        <p>  <strong>Rs. 999.00</strong></p>
        </Link> 
      </div>
    

      <div className="cardKurtasets">
        <Link style={{ textDecoration: 'none' }} to="/Kurtasets">
        <img
          src="https://www.anivartee.com/cdn/shop/files/SLC001543A.png?v=1713788818"
          alt="Kurtasets"
        />
        
        <p>Red and sandle Collar Kurtasets</p>
        <p>  <strong>Rs. 799.00</strong></p>
        </Link>
      </div>

    </div>
 </div>
  );
}

export default Kurtasets;