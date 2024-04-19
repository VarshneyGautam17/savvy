import './App.css';
import AboutUs from './Components/AboutUs';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Maincon1 from './Components/Maincon1';
import ScrollToTop from './Components/ScrollToTop';
import Work from './Components/Work';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
 <Header />
    <Routes>
      <Route path="/" element={<Maincon1 />}/>
      <Route  path="/about-us" element={<AboutUs />} />
      
    </Routes>
    <Footer />
  </BrowserRouter>
    
    

    

  );
}

export default App;
