import React, { useState }  from 'react'
import { Data } from '../Data';

export const ProductList = ({
    listProdA,
}) => {
    const [allProducts, setAllProducts] = useState([]);

    const onAddProduct = product => {

        // if(allProducts.find(item => item.id === product.id)) {
        //     const products = allProducts.map(item => 
        //         item.id === product.id 
        //             ? {...item, quantity: item.quantity + 1} 
        //             : item
        //     );
        //     setTotal(total + product.price * product.quantity);
        //     setCountProducts(countProducts + product.quantity);
        //     return setAllProducts([...products]);
        // }
        
        // setTotal(total + product.price * product.quantity);
        // setCountProducts(countProducts + product.quantity);
        setAllProducts([...allProducts, product])
        listProdA([...allProducts, product])
    };

  return (
    <div className='container-items'>
        {Data.map(product => (
            <div className="item" key={product.id}>
                <figure>
                    <img src={product.img} alt={product.nameProduct} />
                </figure>
                <div className="info-product">
					<h2>{product.nameProduct} </h2>
					<p className="price">${product.price} </p>
					<button onClick={() => onAddProduct(product)}>
                        Añadir al carrito
                    </button>
				</div>
            </div>
        ))}
    </div>
  );
};

export default ProductList;