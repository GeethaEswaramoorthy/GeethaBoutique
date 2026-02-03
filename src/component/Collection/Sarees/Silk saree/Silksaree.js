import React from "react";
import "./Silksaree.css";
import { Link } from "react-router-dom";
function Silksaree() {

  return (
   <div className="Silksareeproducts">
 
      <div className="Silksaree-cards">

        <div className="cardSilksaree">
          <Link style={{ textDecoration: 'none' }} to="/SilkSaree">
          <img
        src="https://madrassarees.com/cdn/shop/files/avantikasemimysoresilksmallborder_4.webp?v=1769498932"
          alt="SilkSaree"
        />
        <p>Royal Cocoa Brown - Avantika - Semi Mysore silk with small border - Perfect for Festival Wear.</p>
        <p>  <strong>Rs.1,200.00</strong></p>
         </Link>
      </div>

      <div className="cardSilksaree">
        <Link style={{ textDecoration: 'none' }} to="/SilkSaree">
        <img
          src="https://madrassarees.com/cdn/shop/files/maheswaripremiumcottonsilkwithstripesblouse_8_copy.webp?v=1768547183"
          alt="SilkSaree"
        />
    <p>Rustic Brick Red - Maheswari - Premium Lightweight cotton silk with contrast pallu and blouse - Perfect for Festive Wear.</p>
        <p>  <strong>Rs.1,799.00</strong></p>
        </Link>
      </div>
      
      <div className="cardSilksaree">
        <Link style={{ textDecoration: 'none' }} to="/SilkSaree">
        <img
          src="https://madrassarees.com/cdn/shop/files/Kanimozhisoftsilkwithfloralborder_4.webp?v=1769074330"
          alt="SilkSaree"
        />
        
        <p>Jet Black - Kanimozhi - Soft Silk Saree with Floral Zari Border - Perfect for Small Functions</p>
        <p>  <strong>Rs. 1999.00</strong></p>
        </Link>
      </div>

      <div className="cardSilksaree">
        <Link style={{ textDecoration: 'none' }} to="/SilkSaree">
        <img
          src="https://madrassarees.com/cdn/shop/files/kanimozhisoftsilkwithkattamborder_1.webp?v=1764326390"
          alt="SilkSaree"
        />
        
        <p>
Classic Rich Red - Kanimozhi - Soft Silk with Buttas and Checks Border - Best for Function Wear</p>
        <p>  <strong>Rs. 2,200.00</strong></p>
        </Link>
      </div>
      
      <div className="cardSilksaree">
        <Link style={{ textDecoration: 'none' }} to="/SilkSaree">
        <img
          src="https://madrassarees.com/cdn/shop/files/kanimozhitempleborder_4_copy.webp?v=1769773044"
          alt="SilkSaree"
        />
        
        <p>Fuchsia Pink - Kanimozhi - Premium dualshade soft silk with Temple Border</p>
        <p>  <strong>Rs. 1599.00</strong></p>
        </Link>
      </div>

      <div className="cardSilksaree">
        <Link style={{ textDecoration: 'none' }} to="/SilkSaree">
        <img
          src="https://madrassarees.com/cdn/shop/files/srivalli_satin_silk_2.webp?v=1763547475"
          alt="SilkSaree"
        />
        
        <p>Black Pearl - Sri valli pure satin silk with peacock buttas and gold zari border</p>
        <p>  <strong>Rs. 1750.00</strong></p>
        </Link>
      </div>

    </div>
 </div>
  );
}

export default Silksaree;