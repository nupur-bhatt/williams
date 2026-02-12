import AppBar from "../components/AppBar/AppBar";
import Home from "../components/Home/Home";
import Services from "../components/Services/Services";
import Book from "../components/Book/Book";
import Contact from "../components/Contact/Contact";
import { Routes, Route } from 'react-router-dom';
import Footer from "../components/Footer/Footer";
import Cleaning from "../components/Services/Cleaning";
import Moving from "../components/Services/Moving";
import JunkRemoval from "../components/Services/JunkRemoval";

function App() {
  return (
      <>    
      <AppBar />
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/cleaning" element={<Cleaning />} />
        <Route path="/services/moving" element={<Moving />} />
        <Route path="/services/junkremoval" element={<JunkRemoval />} />
        <Route path="/book" element={<Book />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;