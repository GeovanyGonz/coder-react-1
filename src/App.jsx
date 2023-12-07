import { Route, Routes } from "react-router-dom"
import { useState } from 'react'
import { ProductList } from './Components/ProductList';
import './App.css';
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Home from "./Components/Pages/Home";
import Services from "./Components/Pages/Services";
import About from "./Components/Pages/About";
import Contact from "./Components/Pages/Contact";
import Carrito from "./Components/CartWidget/index"

function App() {

  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);
   
  return(
    <>

  <div className='App'>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/carrito" element={<Carrito />} />
    </Routes>
  </div>   

      <Header
          allProducts={allProducts} 
          setAllProducts={setAllProducts}
          total={total} 
          setTotal={setTotal} 
          countProducts={countProducts}
          setCountProducts={setCountProducts}     
      />

      <ProductList 
          allProducts={allProducts} 
          setAllProducts={setAllProducts}
          total={total}
          setTotal={setTotal}
          countProducts={countProducts}
          setCountProducts={setCountProducts}
      />
    </>
  );
}

export default App;
