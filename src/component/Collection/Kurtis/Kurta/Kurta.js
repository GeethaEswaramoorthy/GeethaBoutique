import React from "react";
import "./Kurta.css";
import { Link } from "react-router-dom";
function Kurta() {

  return (
   <div className="Kurtaproducts">
 
      <div className="Kurta-cards">

        <div className="cardKurta">
          <Link style={{ textDecoration: 'none' }} to="/Kurta">
          <img
        src="https://manngiri.com/cdn/shop/files/4_2_c7bca7a2-ce80-48e3-9206-6fde14e49bfe.jpg?v=1749748348&width=1000"
          alt="Kurta"
        />
        <p> Pink Purple Chinese Collar Kurta.</p>
        <p>  <strong>Rs.899.00</strong></p>
         </Link>
      </div>

      <div className="cardKurta">
        <Link style={{ textDecoration: 'none' }} to="/Kurta">
        <img
          src="https://manngiri.com/cdn/shop/files/4_3_6ce4e24c-65e8-44db-b742-7fecfbe6d073.jpg?v=1749748409&width=1000"
          alt="Kurta"
        />
       <p>Orange Aqua Chinese Collar Kurta.</p>
        <p>  <strong>Rs.799.00</strong></p>
        </Link>
      </div>
    

      <div className="cardKurta">
        <Link style={{ textDecoration: 'none' }} to="/Kurta">
        <img
          src="https://manngiri.com/cdn/shop/files/4_05926eed-666a-4d7c-b67f-90cbfdb900d9.jpg?v=1749748518&width=1000"
          alt="Kurta"
        />
        
        <p>Red Yellow Chinese Collar Kurta</p>
        <p>  <strong>Rs. 899.00</strong></p>
        </Link>
      </div>

      <div className="cardKurta">
        <Link style={{ textDecoration: 'none' }} to="/Kurta">
        <img
          src="https://manngiri.com/cdn/shop/files/3_2_391051e7-55ed-470d-9e32-40aaf8e98ede.jpg?v=1749748459&width=1000"
          alt="Kurta"
        />
        
        <p>Blue Green Chinese Collar Kurta</p>
        <p>  <strong>Rs. 999.00</strong></p>
        </Link> 
      </div>
      
      <div className="cardKurta">
        <Link style={{ textDecoration: 'none' }} to="/Kurta">
        <img
          src="https://manngiri.com/cdn/shop/files/4_1_42150a78-0969-4cfc-9147-6feeeba7ede4.jpg?v=1749748271&width=1000"
          alt="Kurta"
        />
        
        <p>Green Yellow Chinese Collar Kurta</p>
        <p>  <strong>Rs. 899.00</strong></p>
        </Link>
      </div>

      <div className="cardKurta">
        <Link style={{ textDecoration: 'none' }} to="/Kurta">
        <img
          src="https://manngiri.com/cdn/shop/files/4_2_c7bca7a2-ce80-48e3-9206-6fde14e49bfe.jpg?v=1749748348&width=1000"
          alt="Kurta"
        />
        
        <p>Pink Purple Chinese Collar Kurta</p>
        <p>  <strong>Rs. 799.00</strong></p>
        </Link>
      </div>

    </div>
 </div>
  );
}

export default Kurta;