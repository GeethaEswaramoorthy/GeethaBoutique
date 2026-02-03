import React from "react";
import "./Cottonsaree.css";
import { Link } from "react-router-dom";
function Cottonsaree() {

  return (
   <div className="Cottonsareeproducts">
 
      <div className="Cottonsaree-cards">

        <div className="cardCottonsaree">
          <Link style={{ textDecoration: 'none' }} to="/CottonSaree">
          <img
        src="https://madrassarees.com/cdn/shop/files/sowmiyabamboocottonwithhandblockchecksdoubleblousecombo_24.webp?v=1767856266"
          alt="CottonSaree"
        />
        <p>Butter yellow - Sowmiya - Bamboo Cotton with Handblock Checks with Flower Double Blouse Combo - Perfect for Office Wear.</p>
        <p>  <strong>Rs.1190.00</strong></p>
         </Link>
      </div>

      <div className="cardCottonsaree">
        <Link style={{ textDecoration: 'none' }} to="/CottonSaree">
        <img
          src="https://madrassarees.com/cdn/shop/files/linencottonwithleafprints_3_copy.webp?v=1768290685"
          alt="CottonSaree"
        />
       <p>Earthy Seafoam Green - Linen Cotton Saree with Leaf Print with Tiny Border - Best for Office Wear.</p>
        <p>  <strong>Rs.799.00</strong></p>
        </Link>
      </div>
    

      <div className="cardCottonsaree">
        <Link style={{ textDecoration: 'none' }} to="/CottonSaree">
        <img
          src="https://madrassarees.com/cdn/shop/files/handmadesouthcottons_2.webp?v=1754979408"
          alt="CottonSaree"
        />
        
        <p>Ambigai - Lotus Handpainted south cotton with raw silk blouse combo - Maroon</p>
        <p>  <strong>Rs. 899.00</strong></p>
        </Link>
      </div>

      <div className="cardCottonsaree">
        <Link style={{ textDecoration: 'none' }} to="/CottonSaree">
        <img
          src="https://madrassarees.com/cdn/shop/files/softlinencottonwithikkatprintspeacockblue_3.webp?v=1767607915"
          alt="CottonSaree"
        />
        
        <p>Ocean Indigo - Soft Linen Cotton with ikkat Prints - Best for Office Wear</p>
        <p>  <strong>Rs. 999.00</strong></p>
        </Link>
      </div>
      
      <div className="cardCottonsaree">
        <Link style={{ textDecoration: 'none' }} to="/CottonSaree">
        <img
          src="https://madrassarees.com/cdn/shop/files/madrasmargazhispecialsarees_10.webp?v=1766814457"
          alt="CottonSaree"
        />
        
        <p>Fuchsia Pink - Kanimozhi - Premium dualshade soft silk with Temple Border</p>
        <p>  <strong>Rs. 1099.00</strong></p>
        </Link>
      </div>

      <div className="cardCottonsaree">
        <Link style={{ textDecoration: 'none' }} to="/CottonSaree">
        <img
          src="https://madrassarees.com/cdn/shop/files/Losliya_1.webp?v=1768024264"
          alt="CottonSaree"
        />
        
        <p>Soft Linen Cotton Saree with Aqua Blue & Floral Prints</p>
        <p>  <strong>Rs. 1059.00</strong></p>
        </Link>
      </div>

    </div>
 </div>
  );
}

export default Cottonsaree;