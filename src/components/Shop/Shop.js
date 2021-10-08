import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);
    const addToCart = (product) => {
        const newCart = [...cart, product]
        setCart(newCart);
    }
    return (
        <div className="">
            <p className="product-found">Total Products Found: {products.length}</p>
            <div className="shop-section">
                <div className="product-section">

                    {
                        products.map(product => <Product
                            key={product.key}
                            product={product}
                            addToCart={addToCart}
                        ></Product>)
                    }
                </div>
                <div className="cart-section">
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;