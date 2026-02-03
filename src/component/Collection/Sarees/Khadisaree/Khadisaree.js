import React from "react";
import "./Khadisaree.css";
import { Link } from "react-router-dom";
function Khadisaree() {

  return (
   <div className="Khadisareeproducts">
 
      <div className="Khadisaree-cards">

        <div className="cardKhadisaree">
          <Link style={{ textDecoration: 'none' }} to="/Khadisaree">
          <img
        src="https://madrassarees.com/cdn/shop/files/Shruticontrastkhadiwithginiwork_3_copy.webp?v=1769784446"
          alt="Khadisaree"
        />
        <p>Majestic Maroon - Shruti - Soft khadi Gini work with contrast pallu and blouse - Perfect for Office Wear.</p>
        <p>  <strong>Rs.1190.00</strong></p>
         </Link>
      </div>

      <div className="cardKhadisaree">
        <Link style={{ textDecoration: 'none' }} to="/Khadisaree">
        <img
          src="https://madrassarees.com/cdn/shop/files/khadisareewithlinenblousecombo_1.webp?v=1764770298"
          alt="Khadisaree"
        />
       <p>EaCanary Yellow - Kotravai - Plain khadi with linen blouse combo - Perfect for Regular Wear.</p>
        <p>  <strong>Rs.799.00</strong></p>
        </Link>
      </div>
    

      <div className="cardKhadisaree">
        <Link style={{ textDecoration: 'none' }} to="/Khadisaree">
        <img
          src="https://madrassarees.com/cdn/shop/files/pattedaanchu_1_6be67afa-d565-45d7-bfb0-89178700e4e7.webp?v=1769843887"
          alt="Khadisaree"
        />
        
        <p>Patteda Anchu saree Black with black</p>
        <p>  <strong>Rs. 899.00</strong></p>
        </Link>
      </div>

      <div className="cardKhadisaree">
        <Link style={{ textDecoration: 'none' }} to="/Khadisaree">
        <img
          src="https://madrassarees.com/cdn/shop/files/Linencottonwithmadraschecksdoubleblousecombo_4.webp?v=1769266581"
          alt="Khadisaree"
        />
        
        <p>Mint Ice Green - khadi saree with madras checks double blouse combo - Perfect for Office Wear</p>
        <p>  <strong>Rs. 999.00</strong></p>
        </Link>
      </div>
      
      <div className="cardKhadisaree">
        <Link style={{ textDecoration: 'none' }} to="/Khadisaree">
        <img
          src="https://madrassarees.com/cdn/shop/files/Linencottonwithorganzabarnettedoubleblousecombo_3.webp?v=1769078115"
          alt="Khadisaree"
        />
        
        <p>Pink Frost - Soft khadi saree with organza barnette double blouse combo - Perfect for Office Wear</p>
        <p>  <strong>Rs. 1099.00</strong></p>
        </Link>
      </div>

      <div className="cardKhadisaree">
        <Link style={{ textDecoration: 'none' }} to="/Khadisaree">
        <img
          src="https://madrassarees.com/cdn/shop/files/leela_soft_mul_cotton_2.webp?v=1765611254"
          alt="Khadisaree"
        />
        
        <p>Blue & Olive Tone - Leela - Breezy Summer series – Soft Khadi Saree</p>
        <p>  <strong>Rs. 1059.00</strong></p>
        </Link>
      </div>

    </div>
 </div>
  );
}

export default Khadisaree;