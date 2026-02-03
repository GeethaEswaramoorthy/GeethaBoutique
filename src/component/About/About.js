import React from "react";
import "./About.css";

function About() {
  return (
    <section id="about" className="about">
      {/* Main Heading */}
      <h1>About Us</h1>

      {/* Subheading / tagline */}
      <h2>About Geetha Boutique – Quality in Every Thread</h2>
      <p className="tagline">"Start Falling in Love with Our Outfits." ❤️</p>

      {/* Intro paragraph with bold emphasis */}
      <p>
        At <strong>Geetha Boutique</strong>, we bring you <strong>premium fancy sarees</strong> 
        that seamlessly blend tradition with modern elegance. Every saree tells a story, 
        and we are committed to offering the finest <strong>quality, design, and craftsmanship</strong>.
      </p>

      {/* Who We Are section */}
      <h3>Who We Are</h3>
      <p>
        Geetha Boutique is where <strong>tradition meets style</strong>. Based in <strong>Koduvai,Tiruppur, Tamil Nadu</strong>, 
        we curate <strong>exclusive sarees</strong> that honor the beauty of Indian heritage while embracing contemporary fashion trends.
      </p>

      {/* Our Mission / Values */}
      <h3>Our Mission</h3>
      <p>
        We aim to provide outfits that make every woman feel confident, stylish, and unique. 
        Our collections focus on elegance, premium quality, and timeless design.
      </p>
    </section>
  );
}

export default About;
