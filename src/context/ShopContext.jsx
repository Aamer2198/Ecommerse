import React, { createContext, useState } from "react"
import all_product from "../components/Assets/all_product"


export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < all_product.length + 1; index++) {
        cart[index] = 0
    }
    return cart;
}

const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart())

    console.log(cartItems)

    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        console.log(cartItems)
    }

    const RemoveFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = all_product.find((product) => product.id === Number(item))
                totalAmount += itemInfo.new_price * cartItems[item]
            }
        }
        return totalAmount;
    }


    const getTotalCartItem = () => {
        let totalItem = 0;
        for (const Item in cartItems) {
            if (cartItems[Item] > 0) {
                totalItem += cartItems[Item]
            }
        }
        return totalItem;
    }

    const ContextValue = { all_product, cartItems, RemoveFromCart, addToCart, getTotalCartAmount, getTotalCartItem }


    return (
        <ShopContext.Provider value={ContextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;