import { Route, Routes } from "react-router-dom"
import { useState } from 'react'
import { ProductList } from './Components/ProductList';
import './App.css';
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Home from "./Components/Pages/Home";
import Tecnologias from "./Components/pages/Tecnologias.jsx";
import Tenis from "./Components/pages/Tenis";
import Lociones from "./Components/pages/Lociones";
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
      <Route path="Tenis" element={<Tenis />} />
      <Route path="/Tecnologias" element={<Tecnologias />} />
      <Route path="/Lociones" element={<Lociones />} />
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
