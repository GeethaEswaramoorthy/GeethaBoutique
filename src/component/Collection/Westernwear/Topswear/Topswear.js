import React from "react";
import "./Topswear.css";
import { Link } from "react-router-dom";
import Topblack from "../../../../Asset/Topblack.png"
import Topgreen from "../../../../Asset/Topgreen.png"
import Topbrown from "../../../../Asset/Topbrown.png"
import Toppink from "../../../../Asset/Toppink.png"
import Toppurple from "../../../../Asset/Toppurple.png"
import Toporange from "../../../../Asset/Toporange.png"


function Topswear() {

  return (
   <div className="Topswearproducts">
 
      <div className="Topswear-cards">

        <div className="cardTopswear">
          <Link style={{ textDecoration: 'none' }} to="/Topswear">
          <img
        src={Topblack}
          alt="Topswear"
        />
        <p> Onyx Black Short Kurti.</p>
        <p>  <strong>Rs.650.00</strong></p>
         </Link>
      </div>

      <div className="cardTopswear">
        <Link style={{ textDecoration: 'none' }} to="/Topswear">
        <img
          src={Topgreen}
          alt="Topswear"
        />
       <p>Pine Green Short top.</p>
        <p>  <strong>Rs.799.00</strong></p>
        </Link>
      </div>
    

      <div className="cardTopswear">
        <Link style={{ textDecoration: 'none' }} to="/Topswear">
        <img 
          src={Topbrown}
          alt="Topswear"
        />
        
        <p>Cotton Traditional top Brown.</p>
        <p>  <strong>Rs. 899.00</strong></p>
        </Link>
      </div>

      <div className="cardTopswear">
        <Link style={{ textDecoration: 'none' }} to="/Topswear">
        <img
          src={Toppink}
          alt="Topswear"
        />
        
        <p>Block printed high low short top- pretty pink</p>
        <p>  <strong>Rs. 799.00</strong></p>
        </Link>
      </div>
      
      <div className="cardTopswear">
        <Link style={{ textDecoration: 'none' }} to="/Topswear">
        <img
          src={Toppurple}
          alt="Topswear"
        />
        
        <p>Timid Purple Short top.</p>
        <p> <strong>Rs. 699.00</strong></p>
        </Link>
      </div>

      <div className="cardTopswear">
        <Link style={{ textDecoration: 'none' }} to="/Topswear">
        <img
          src={Toporange}
          alt="Topswear"
        />
        
        <p>Cotton Printed top Orange</p>
        <p>  <strong>Rs. 799.00</strong></p>
        </Link>
      </div>

    </div>
 </div>
  );
}

export default Topswear;