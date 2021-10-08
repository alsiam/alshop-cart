import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './product.css';

const Product = (props) => {
    const { img, name, seller, price, stock } = props.product;
    const logo = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className="product">
            <div className="shop-card">
                <div className="img">
                    <img src={img} alt="" />
                </div>
                <div className="details">
                    <h2>{name}</h2>
                    <p><small>by: {seller}</small></p>
                    <h2>${price}</h2>
                    <p>only {stock} left in stock - order soon</p>
                    <button onClick={() => props.addToCart(props.product)} className="btn-regular">{logo} Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default Product;