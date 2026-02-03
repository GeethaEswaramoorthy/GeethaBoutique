import React from "react";
import "./Lehenga.css";
import { Link } from "react-router-dom";
function Lehenga() {

  return (
   <div className="Lehengaproducts">
 
      <div className="Lehenga-cards">

        <div className="cardLehenga">
          <Link style={{ textDecoration: 'none' }} to="/Lehenga">
          <img
        src="https://www.ethnicplus.in/cdn/shop/files/7086PEACH_02_8dacf782-fe0f-41df-baa5-1ebec9efc5d2_400x.jpg?v=1768783009"
          alt="Lehenga"
        />
        <p> Pink color Lehenga.</p>
        <p>  <strong>Rs.2899.00</strong></p>
         </Link>
      </div>

      <div className="cardLehenga">
        <Link style={{ textDecoration: 'none' }} to="/Lehenga">
        <img
          src="https://www.ethnicplus.in/cdn/shop/files/7086NAVYBLUE_01_400x.jpg?v=1768782979"
          alt="Lehenga"
        />
        
        <p>Blue Collar Lehenga</p>
        <p>  <strong>Rs. 3899.00</strong></p>
        </Link>
      </div>

      <div className="cardLehenga">
        <Link style={{ textDecoration: 'none' }} to="/Lehenga">
        <img
          src="https://www.ethnicplus.in/cdn/shop/files/7086PURPLE_01_210ceaf3-b5dc-4da5-8b8b-72ea608873db_400x.jpg?v=1768783043"
          alt="Lehenga"
        />
        
        <p> Purple Function Wear Lehenga</p>
        <p>  <strong>Rs. 2799.00</strong></p>
        </Link>
      </div>

      <div className="cardLehenga">
        <Link style={{ textDecoration: 'none' }} to="/Lehenga">
        <img
          src="https://www.ethnicplus.in/cdn/shop/files/7086MARRON_04_400x.jpg?v=1768782919"
          alt="Lehenga"
        />
       <p>Brown Collar Lehenga.</p>
        <p>  <strong>Rs.3799.00</strong></p>
        </Link>
      </div>


       <div className="cardLehenga">
        <Link style={{ textDecoration: 'none' }} to="/Lehenga">
        <img
          src="https://www.ethnicplus.in/cdn/shop/files/7086RAMABLUE_05_400x.jpg?v=1768783134"
          alt="Lehenga"
        />
        
        <p>Skyblue color Lehenga</p>
        <p>  <strong>Rs. 2899.00</strong></p>
        </Link>
      </div>

      

      <div className="cardLehenga">
        <Link style={{ textDecoration: 'none' }} to="/Lehenga">
        <img
          src="https://www.ethnicplus.in/cdn/shop/files/7086YELLOW_02_400x.jpg?v=1768783169"
          alt="Lehenga"
        />
        
        <p>Yellow Festival Wear Lehenga</p>
        <p>  <strong>Rs. 2799.00</strong></p>
        </Link> 
      </div>
    


    </div>
 </div>
  );
}

export default Lehenga;