
import { ProductList } from './Components/ProductList';
import { useState } from 'react'
import './App.css';
import Navbar from "./Components/Navbar";

function App() {
  const [products, setProducts] = useState([]);
   
  return(
    <>

  <div className='App'>
    <Navbar products={products}/>
    <ProductList listProdA={(products) => setProducts(products)}/>

  </div>   

      
    </>
  );
}

export default App;
