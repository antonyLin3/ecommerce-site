import React from 'react'
import Link from 'next/link'
import { AiOutlineShopping } from 'react-icons/ai'


import { useStateContext } from '../context/StateContext'
import Cart from './Cart'





const Navbar = () => {
  const { totalQuantity, showCart, togglShowCart, setShowCart } = useStateContext()
  // console.log(useStateContext())
  return (
    <div className='navbar-container'>
      {!showCart &&<>
        <p className='logo'>
          <Link href='/'>健身應援輕鬆buy</Link>
        </p>

        <button 
          type='button' 
          className='cart-icon' 
          onClick={() => {togglShowCart()}}>
            <AiOutlineShopping size={20}/>
            <span className='cart-item-qty'>{totalQuantity}</span>
        </button>
      </>}
      {showCart && <Cart />}
    </div>
  )
}

export default Navbar