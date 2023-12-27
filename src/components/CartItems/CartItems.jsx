import React, { useContext } from 'react'
import "./CartItems.css"
import { ShopContext } from '../../context/ShopContext'
import remove_icon from "../Assets/cart_cross_icon.png"

export const CartItems = () => {

    const { all_product, cartItems, RemoveFromCart, getTotalCartAmount } = useContext(ShopContext)

    return (
        <div className='cartItems'>
            <div className="cartItems-format-main">
                <p>Product</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {
                all_product.map((j) => {
                    if (cartItems[j.id] > 0) {
                        return <div>
                            <div className="cartItems-format cartItems-format-main">
                                <img src={j.image} alt="" className='cartIcon-product-Icon' />
                                <p>{j.name}</p>
                                <p>${j.new_price}</p>
                                <button className='cartItems-quantity'>{cartItems[j.id]}</button>
                                <p>${j.new_price * cartItems[j.id]}</p>
                                <img className='cartItems-remove-icon' src={remove_icon} alt="" onClick={() => RemoveFromCart(j.id)} />
                            </div>
                            <hr />
                        </div>
                    }
                    return null
                })
            }
            <div className="cartItems-down">
                <div className="cartItems-total">
                    <h1>Cart Total</h1>
                    <div>
                        <div className="cartItems-total-items">
                            <p>SubTotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cartItems-total-items">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cartItems-total-items">
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount()}</h3>
                        </div>
                    </div>
                    <button>PROCEED TO CHECKOUT</button>
                </div>
                <div className="cartItems-promo-code">
                    <p>If you have a promo code,Enter it here</p>
                    <div className="cartItems-promo-box">
                        <input type="text" placeholder='Promo code' />
                        <button>Submit</button>
                    </div>

                </div>
            </div>

        </div>
    )
}
