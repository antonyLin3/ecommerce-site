import React, { useRef } from 'react'
import Link from 'next/link'
import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft, AiOutlineShopping } from 'react-icons/ai'
import { TiDeleteOutline } from 'react-icons/ti'
import toast from 'react-hot-toast'

import { useStateContext } from '../context/StateContext'
import { urlFor } from '../lib/client'
import getStripe from '../lib/getStripe'



const cart = () => {
  const cartRef = useRef()
  const { totalPrice, totalQuantity, cartItems, setShowCart, toggleCartItemQuantity, onRemove } = useStateContext()
  // console.log(cartItems)



  const handleCheckout = async() => {
    const stripe = await getStripe()
  
    const response = await fetch('/api/stripe', {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(cartItems),
    })
  
    if (response.statusCode === 500) return 
  
    const data = await response.json()
    console.log(data)
  
    toast.loading('重新導向中')
  
    stripe.redirectToCheckout( {sessionId: data.id} )
  }










  return (
    <div className='cart-wrapper' ref={cartRef}>
      <div className='cart-container'>
        <button
          type='button'
          className='cart-heading'
          onClick={() => setShowCart(false)}>
          <AiOutlineLeft  size={20}/>
          <span className='heading'>你的購物車</span>
          <span className='cart-num-items'>({totalQuantity}項商品)</span>
        </button>

        {cartItems.length < 1 && (
          <div className='empty-cart'>
            <AiOutlineShopping size={150}/>
            <h3>你的購物車目前是空的</h3>
            {/* <Link href=''> */}
              <button
                type='button'
                onClick={() => setShowCart(false)}
                className='btn'
              >
                繼續購物
              </button>
            {/* </Link> */}
          </div>
        )}

        <div className='product-container'>
          {cartItems.length > 0 && cartItems.map((item) => {
            return <div className='product' key={item._id}>
              {item && <img 
                src={urlFor(item.image[0])}
                className='cart-product-image'
              />}
              <div className='item-desc'>
                <div className='flex top'>
                  <h5>{item?.name}</h5>
                  <h4>${item?.price}</h4>
                </div>
                <div className='flex bottom'>
                  <div>
                    <p className='quantity-desc'>
                    <span className='minus' onClick={() => toggleCartItemQuantity(item._id, 'dec')}><AiOutlineMinus size={25}/></span>
                    <span className='num'>{item?.quantity}</span>
                    <span className='plus' onClick={() => toggleCartItemQuantity(item._id, 'inc')}><AiOutlinePlus size={25}/></span>
                    </p>
                  </div>
                  <button
                    type='button'
                    className='delete-item'
                    onClick={()=>onRemove(item._id)}>
                      <TiDeleteOutline size={25}/>
                  </button>
                </div>
              </div>
            </div>
          })}

          {cartItems.length >= 1 && (
            <div className='cart-bottom'>
              <div className='total'>
                <h3>小計:</h3>
                <h3>${totalPrice}</h3>
              </div>
              <div className='btn-container'>
                <button type='button' className='btn' onClick={handleCheckout}>立即付款</button>
              </div>
            </div>
          )}
        </div>
        
      </div>
      
    </div>
  )
}

export default cart