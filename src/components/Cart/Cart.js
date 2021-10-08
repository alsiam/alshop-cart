import React from 'react';
import './cart.css';

const Cart = (props) => {
    const { cart } = props;
    console.log(cart);

    const total = cart.reduce((previous, product) => previous + product.price, 0);

    const shipping = cart.reduce((previous, product) => previous + product.shipping, 0);
    
    const tax = (total + shipping) / 10;
    const grand = total + shipping + tax;
    return (
        <div className="cart-box">
            <h2>Order Summery</h2>
            <table>
                <tr>
                    <td><h3>Items Ordered</h3></td>
                    <td><h3>{cart.length}</h3></td>
                </tr>
                <tr>
                    <td><h3>Total Amount</h3></td>
                    <td><h3>$ {total.toFixed(2)}</h3></td>
                </tr>
                <tr>
                    <td><h3>Shipping Cost</h3></td>
                    <td><h3>$ {shipping.toFixed(2)}</h3></td>
                </tr>
                <tr className="table-border">
                    <td><h3>Tax</h3></td>
                    <td><h3>$ {tax.toFixed(2)}</h3></td>
                </tr>
                <tr>
                    <td><h3>Grand Total</h3></td>
                    <td><h3>$  {grand.toFixed(2)}</h3></td>
                </tr>
            </table>

        </div >
    );
};

export default Cart;