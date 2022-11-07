import React, { createContext, useContext, useState, useEffect } from 'react'
import { toast } from 'react-hot-toast'


const Context = createContext()

export const StateContext = ({ children }) => {
    const [showCart, setShowCart] = useState(false)
    const [cartItems, setCartItems] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)
    const [totalQuantity, setTotalQuantity] = useState(0)
    const [qty, setQty] = useState(1)

    const onAdd = (product, quantity) => {
        const checkIsInCart = cartItems?.find(item => item._id == product._id)
        console.log(cartItems)
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
                return {...item}
            }) 
            // 這一段好像會有問題，會出現undefined的狀況
            // const updatedCartItems = cartItems.filter(item => item._id == product._id)

            
            setCartItems(updatedCartItems)
        } else {
            product.quantity = quantity
            setCartItems([...cartItems, {...product}])
        }
        toast.success(`${qty} ${product.name} 加入購物車成功`)
    }

    const onRemove = (id) => {
        console.log(id)
        const foundProduct = cartItems.find((item) => item._id == id)
        const updatedNewCartItems = cartItems.filter(item => item._id !== id)
        setCartItems(updatedNewCartItems)
        setTotalPrice(prev => prev - foundProduct.price * foundProduct.quantity)
        setTotalQuantity(prev => prev - foundProduct.quantity)
    }

    const toggleCartItemQuantity = (id, value) => {
        const foundProduct = cartItems.find((item) => item._id == id)
        // console.log(foundProduct)
        if (value == 'dec') {
            if (foundProduct.quantity <= 1) {
                // 這裡要直接移出商品
                console.log("商品小魚一狀況")
            } else {
                const updatedNewCartItems = cartItems.map((item) => {
                    if (item._id == id) {
                        return {
                            ...item, quantity: item.quantity - 1
                        }
                    }
                    return {
                        ...item
                    }})
                setCartItems(updatedNewCartItems)
                setTotalPrice(prevTotalPrice => prevTotalPrice - foundProduct.price)
                setTotalQuantity(prevTotalQuantity => prevTotalQuantity - 1)
            }
            
        } else if (value = 'inc') {
            const updatedNewCartItems = cartItems.map((item) => {
                if (item._id == id) {
                    return {
                        ...item, quantity: item.quantity + 1
                    }
                }
                return {
                    ...item
                }
            })
            setCartItems(updatedNewCartItems)
            // setCartItems([...cartItems, {...foundProduct, quantity: foundProduct.quantity + 1}])
            setTotalPrice(prevTotalPrice => prevTotalPrice + foundProduct.price)
            setTotalQuantity(prevTotalQuantity => prevTotalQuantity + 1)

        }
    }

    const togglShowCart = () => {
        setShowCart(prev => !prev)
        // console.log(showCart)
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
                setShowCart,
                setTotalQuantity,
                setTotalPrice,
                setCartItems,
                cartItems,
                totalPrice,
                totalQuantity,
                qty,
                incQty,
                decQty,
                onAdd,
                onRemove,
                togglShowCart,
                toggleCartItemQuantity
            }}
        >
            {children}
        </Context.Provider>
    )
}

export const useStateContext = () => useContext(Context)

