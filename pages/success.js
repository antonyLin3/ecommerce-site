import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { BsBagCheckFill} from 'react-icons/bs'
// import { IconName } from "react-icons/bs";
import { useRouter } from 'next/router'
import { runConfetti } from '../lib/utils' 

import { useStateContext } from '../context/StateContext'

const success = () => {
    const { setCartItems, setTotalPrice, setTotalQuantity } = useStateContext()
    const { order, setOrder } = useState(null)

    useEffect(()=> {
        localStorage.clear()
        setCartItems([])
        setTotalPrice(0)
        setTotalQuantity(0)
        runConfetti()
    },[])


    return (
        <div className='success-wrapper'>
            <div className='success'>
                <p className='icon'>
                    <BsBagCheckFill />
                </p>
                <h2>感謝你的購買</h2>
                <p className='email-msg'>你的購買明細已經寄至你的信箱</p>
                <p className='description'>
                    如果有任何問題，歡迎寄信至
                    <a className='email' href='mailto:antonyhy1999@gmail.com'>
                        antonyhy1999@gmail
                    </a>
                </p>
                <Link href='/'>
                    <button type='button' className='btn'>
                        繼續購物
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default success