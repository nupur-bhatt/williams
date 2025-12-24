import AppBar from "../components/AppBar/AppBar";
import HomeCarousel from "../components/HomeCarousel/HomeCarousel";
import Services from "../components/Services/Services";
import Book from "../components/Book/Book";
import Contact from "../components/Contact/Contact";
import { Routes, Route } from 'react-router-dom';
import About from "../components/About/About";

function App() {
  return (
      <div>    
      <AppBar />
       <Routes>
        <Route path="/" element={<HomeCarousel />} />
        <Route path="/services" element={<Services />} />
        <Route path="/book" element={<Book />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About/>}/>
      </Routes>
    </div>
  );
}

export default App;