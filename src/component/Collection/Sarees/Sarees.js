import React from "react";
import "./Sarees.css";
import { Link } from "react-router-dom";
function Sarees() {

  return (
   <div className="sareeproducts">
  <h2 className="saree-title">Saree Collections</h2>
      <div className="saree-cards">

        <div className="cardsaree">
          <Link style={{ textDecoration: 'none' }} to="/Pattusaree">
          <img
        src="https://madrassarees.com/cdn/shop/files/kanimozhisoftsilkwithbuttassilverweaving_3_1370x.webp?v=1766505331"
          alt="Pattu saree"
        />
        <h2>Pattu saree</h2>
        <p>Explore our exquisite range of traditional and elegant pattu sarees.
         
      </p>
      </Link>
      </div>

      <div className="cardsaree">
        <Link style={{ textDecoration: 'none' }} to="/Silksaree">
        <img
          src="https://madrassarees.com/cdn/shop/files/Assam_silk_with_ikkat_pallu_4.jpg?v=1767857971"
          alt="Silk saree"
        />
        <h3>Silk Saree</h3>
        <p>Silk sarees to complete your look in rich look</p>
        </Link>
      </div>
      <div className="cardsaree">
        <Link style={{ textDecoration: 'none' }} to="/Cottonsaree">
        <img
          src="https://madrassarees.com/cdn/shop/files/candy_pop_mul_cotton_3_1370x.webp?v=1763547204"
          alt="Cotton"
        />
        <h3>Cotton Saree</h3>
        <p>Perfect cotton sarees for everyday comfort and style</p>
        </Link>
      </div>
      <div className="cardsaree">
        <Link style={{ textDecoration: 'none' }} to="/Khadisaree">
        <img
          src="https://madrassarees.com/cdn/shop/files/Shalini-Premiumsupernetsareewithembroidery_3.webp?v=1768987880"
          alt="Khadi saree"
        />
        <h3>Khadi saree</h3>
        <p>Khadi sarees for a stylish and graceful look</p>
        </Link>
      </div>
    </div>
 </div>
  );
}

export default Sarees;