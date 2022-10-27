import React, { createContext, useContext, useState, useEffect } from 'react'
import { toast } from 'react-hot-toast'

const Context = createContext()

export const StateContext = ({ children }) => {
    const [showCart, setShowCart] = useState(false)
    const [cartItems, setCartItems] = useState()
    const [totalPrice, setTotalPrice] = useState()
    const [totalQuantity, setTotalQuantity] = useState()
    const [qty, setQty] = useState(1)

    const onAdd = (product, quantity) => {
        const checkIsInCart = cartItems.find(item => item === product._id)
        setTotalPrice(prev => (prev + product.price * quantity))
        setTotalQuantity(prev => (prev + quantity))

        if (checkIsInCart) {
            const updatedCartItems = cartItems.map(item => {
                if(item._id === product._id){
                    return {
                        ...item,
                        quantity: item.quantity + quantity
                    }
                }
            })
            setCartItems(updatedCartItems)
        } else {
            product.quantity = quantity
            setCartItems([...cartItems, {...product}])
        }
    }



    const incQty = () => {
        setQty((preQty) => preQty + 1)
    }

    const decQty = () => {
        setQty((preQty) => {
            if (preQty -1 < 1) return 1 
            return preQty -1
        })
    }

    return (
        <Context.Provider
            value={{
                showCart,
                cartItems,
                totalPrice,
                totalQuantity,
                qty,
                incQty,
                decQty
            }}
        >
            {children}
        </Context.Provider>
    )
}

export const useStateContext = () => useContext(Context)

