import AppBar from "../components/AppBar/AppBar";
import HomeCarousel from "../components/HomeCarousel/HomeCarousel";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
      <div>    
      <AppBar />
       <Routes>
        <Route path="/" element={<HomeCarousel />} />
        
      </Routes>
    </div>
  );
}

export default App;
