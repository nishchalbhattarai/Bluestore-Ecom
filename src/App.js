import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Pages/Header';
import ProductBody from './Pages/productBody';
import Footer from './Pages/Footer';
import Login from './Pages/Login';

function App() {
  return (
    <Router> {/* The Router MUST wrap the Header */}
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<ProductBody />} />
          <Route path="/login" element={<Login />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;