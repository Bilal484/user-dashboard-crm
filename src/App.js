import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductPage from './pages/ProductPage';
import AddCard from './pages/AddCard';


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/ProductPage" element={<ProductPage />} />
          <Route path="/addCard" element={<AddCard />} />
         
        </Routes>
      </div>
    </Router>
  );
}

export default App;
