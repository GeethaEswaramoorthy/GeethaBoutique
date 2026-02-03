import React from "react";
import "./Collection.css";
import { Link } from "react-router-dom";
// import Westernwear from "../../assets/Westernwear.jpeg";
import Westernwear from "../../Asset/Westernwear.jpeg"
import Ethnicwear from "../../Asset/Ethnicwear.png"
import Kurta from "../../Asset/Kurta1.png"
import Accessories from "../../Asset/Accessories1.png"

function Collection() {
    return (
        <section id="collections" className="collections">
            <h2 className="collection-title">Our Collections</h2>

            <div className="collection-cards">
                <div className="card">
                    <Link style={{ textDecoration: 'none' }} to="/sarees">
                        <img
                            src="https://cdn.dribbble.com/userupload/26877771/file/original-ddc60728d185f3bd4b17b1a9dd2235f5.gif"
                            alt="Sarees"
                        />

                        <h3>Sarees</h3>
                        <p>Traditional & elegant saree collections</p>
                    </Link>
                </div>

                <div className="card">
                    <Link style={{ textDecoration: 'none' }} to="/westernwear">
                    <img
                        src={Westernwear}
                        alt="Western Wear"
                    />
                    <h3>Western wear</h3>
                    <p>Modern outfits for every occasion</p>
                    </Link>
                </div>

                <div className="card">
                    <Link style={{ textDecoration: 'none' }} to="/Kurtis">
                    <img
                        src={Kurta}
                        alt="Kurtis"
                    />
                    <h3>Kurtis</h3>
                    <p>Perfect aoutfits for every occasion</p>
                    </Link>

                </div>


                <div className="card">
                    <Link style={{ textDecoration: 'none' }} to="/Ethnicwear">
                    <img
                        src={Ethnicwear}
                        alt="Ethnic Wear"
                    />
                    <h3>Ethnic wear</h3>
                    <p>Perfect Ethnic wear to complete your look</p>
                    </Link>
                </div>

                <div className="card">
                    <Link style={{ textDecoration: 'none' }} to="/Accessories">
                    <img
                        src={Accessories}
                        alt="Accessories"
                    />
                    <h3>Accessories</h3>
                    <p>Perfect accessories to complete your look</p>
                    </Link>
                </div>

            </div>
        </section>
    );
}

export default Collection;
