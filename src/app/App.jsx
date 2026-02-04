import AppBar from "../components/AppBar/AppBar";
import Home from "../components/Home/Home";
import Services from "../components/Services/Services";
import Book from "../components/Book/Book";
import Contact from "../components/Contact/Contact";
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
      <>    
      <AppBar />
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/book" element={<Book />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;