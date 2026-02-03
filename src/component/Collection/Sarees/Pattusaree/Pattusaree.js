import React from "react";
import "./Pattusaree.css";
import { Link } from "react-router-dom";
function Pattusaree() {

  return (
   <div className="Pattusareeproducts">
 
      <div className="Pattusaree-cards">

        <div className="cardPattusaree">
          <Link style={{ textDecoration: 'none' }} to="/PattuSaree">
          <img
        src="https://madrassarees.com/cdn/shop/files/avantikasemimysoresilk_3_copy.webp?v=1769844449"
          alt="PattuSaree"
        />
        <p>Mango Gold - Avantika - Semi Pure pattu with Devalaya Zari Border - Perfect for Festival Wear.</p>
        <p>  <strong>Rs.6,100.00</strong></p>
         </Link>
      </div>

      <div className="cardPattusaree">
        <Link style={{ textDecoration: 'none' }} to="/PattuSaree">
        <img
          src="https://madrassarees.com/cdn/shop/files/durgakatansilk_1_ad0158d8-5e4d-4f3a-ab99-ec974e136ed1.webp?v=1767605935"
          alt="PattuSaree"
        />
    <p>Classic Rich Red with peach border -Durga   Banarasi Soft Katan pattu - Best for small functions.</p>
        <p>  <strong>Rs.8,799.00</strong></p>
        </Link>
      </div>
      
      <div className="cardPattusaree">
        <Link style={{ textDecoration: 'none' }} to="/Pattusaree">
        <img
          src="https://madrassarees.com/cdn/shop/files/sicogadwaldualshade_23.webp?v=1769072287"
          alt="PattuSaree"
        />
        
        <p>Dual shade Purple with green border - Sico Gadwal pattu</p>
        <p>  <strong>Rs. 4999.00</strong></p>
        </Link>
      </div>

      <div className="cardPattusaree">
        <Link style={{ textDecoration: 'none' }} to="/Netsaree">
        <img
          src="https://madrassarees.com/cdn/shop/files/kanimozhisoftsilkwithtissueblend_4.webp?v=1765347279"
          alt="PattuSaree"
        />
        
        <p>Golden Shade Magenta Mist - Thendral - Kanchi tissue silk Saree with Rich Pallu and Blouse - Perfect for Wedding Functions</p>
        <p>  <strong>Rs. 7,200.00</strong></p>
        </Link>
      </div>
      
      <div className="cardPattusaree">
        <Link style={{ textDecoration: 'none' }} to="/Netsaree">
        <img
          src="https://madrassarees.com/cdn/shop/files/sico_gadwal_dual_shade_13.webp?v=1769508855"
          alt="PattuSaree"
        />
        
        <p>Deep Midnight Green - Sico Gadwal semi pattu - Best for Wedding Functions</p>
        <p>  <strong>Rs. 5,999.00</strong></p>
        </Link>
      </div>

      <div className="cardPattusaree">
        <Link style={{ textDecoration: 'none' }} to="/Netsaree">
        <img
          src="https://madrassarees.com/cdn/shop/files/kanimozhiDDinspiredsoftsilkwithtraditionalborder_4.webp?v=1768204969"
          alt="PattuSaree"
        />
        
        <p>Antique Pink - Kanimozhi - pure pattu with Traditional Border - Best for Wedding Functions</p>
        <p>  <strong>Rs. 4,599.00</strong></p>
        </Link>
      </div>

    </div>
 </div>
  );
}

export default Pattusaree;