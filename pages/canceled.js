import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { BsBagXFill} from 'react-icons/bs'
// import { IconName } from "react-icons/bs";
import { useRouter } from 'next/router'
import { runConfetti } from '../lib/utils' 

import { useStateContext } from '../context/StateContext'

const Canceled = () => {




    return (
        <div className='cancel-wrapper'>
            <div className='cancel'>
                <p className='icon'>
                    <BsBagXFill size={40} color='#d51515'/>
                </p>
                <h2>您的購買已取消</h2>
                <p className='email-msg'>由於取消，這筆交易不會向您收款</p>
                <p className='description'>
                    如果有任何問題，歡迎寄信至
                    <a className='email' href='mailto:antonyhy1999@gmail.com'>
                        antonyhy1999@gmail
                    </a>
                </p>
                <Link href='/'>
                    <button type='button' className='btn'>
                        返回首頁
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Canceled