import React from "react";
import "./Home.css";

function Home() {
  return (
    <div>
{/* ===== HOME SECTION ===== */}
      <section id="home" className="home">
        <div className="home-text">
          <h2>Elegant Fashion for Every Occasion</h2>
          <p>Handpicked styles for modern womens collections</p>
        </div>

        <div className="home-image">
          <img
            src="https://images.unsplash.com/photo-1521334884684-d80222895322"
            alt="Boutique"
          />
        </div>
      </section>
    </div>
  );
}

export default Home;
