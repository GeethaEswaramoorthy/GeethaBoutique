import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './component/Home/Home';
import Collection from './component/Collection/Collection';
import About from './component/About/About';
import Contact from './component/Contact/Contact';
import Header from './component/Header/Header';
import Sarees from './component/Collection/Sarees/Sarees';
import Westernwear from './component/Collection/Westernwear/Westernwear'; 
import Kurtis from './component/Collection/Kurtis/Kurtis';
import Ethnicwear from './component/Collection/Ethnicwear/Ethnicwear';
import Accessories from './component/Collection/Accessories/Accessories';
import Pattusaree from './component/Collection/Sarees/Pattusaree/Pattusaree';
import Silksaree from './component/Collection/Sarees/Silk saree/Silksaree';
import Cottonsaree from './component/Collection/Sarees/Cottonsaree/Cottonsaree';
import Khadisaree from './component/Collection/Sarees/Khadisaree/Khadisaree';
import Topswear from './component/Collection/Westernwear/Topswear/Topswear';  
import Jeans from './component/Collection/Westernwear/Jeans/Jeans'; 
import Kurta from './component/Collection/Kurtis/Kurta/Kurta';
import Kurtasets from './component/Collection/Kurtis/Kurtasets/Kurtasets';
import Gowns from './component/Collection/Ethnicwear/Gowns/Gowns';  
import Lehenga from './component/Collection/Ethnicwear/Lehenga/Lehenga';  
import Handbags from './component/Collection/Accessories/Handbags/Handbags';
import Footwear from './component/Collection/Accessories/Footwear/Footwear';
import Footer from './component/Footer/Footer';
import BackButton from './component/Backbutton/Backbutton'; 


function App() {
  return (
    <div className="App">

 <BrowserRouter>

      <Header /> {/* Common Header */}
      <BackButton />   {/* Back Button */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/sarees" element={<Sarees />} />
         <Route path="/Westernwear" element={<Westernwear />} />
         <Route path="/Kurtis" element={<Kurtis />} />
         <Route path="/Ethnicwear" element={<Ethnicwear />} />
         <Route path="/Accessories" element={<Accessories />} />
         <Route path="/Pattusaree" element={<Pattusaree />} />
          <Route path="/SilkSaree" element={<Silksaree />} />
         <Route path="/CottonSaree" element={<Cottonsaree />} />
         <Route path="/Khadisaree" element={<Khadisaree />} />
         <Route path="/Topswear" element={<Topswear />} />
          <Route path="/Jeans" element={<Jeans />} />
          <Route path="/Kurta" element={<Kurta />} />
          <Route path="/Kurtasets" element={<Kurtasets />} />
          <Route path="/Gowns" element={<Gowns />} />
          <Route path="/Lehenga" element={<Lehenga />} />
          <Route path="/Handbags" element={<Handbags />} />
          <Route path="/Footwear" element={<Footwear />} />
          
          
</Routes>
      
      <Footer /> {/* Common Footer */}
    </BrowserRouter>

  
      
    </div>
  );
}

export default App;
