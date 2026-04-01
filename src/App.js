import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Pages/Header';
// import ProductBody from './Pages/productBody';
import MainBody from './Pages/MainBody';
import Footer from './Pages/Footer';
import Login from './Pages/Login';
import Shop from './Pages/Shop';
import About from './Pages/About';
function App() {
  return (
    <Router> {/* The Router MUST wrap the Header */}
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<MainBody />} />
          <Route path="/login" element={<Login />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;