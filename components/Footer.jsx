import React from 'react'
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai'

const Footer = () => {

    return (
        <div className='footer-container'>
            <p>2022 antony person all right reseved</p>
            <p className='icons'><AiFillInstagram size={30}/> <AiOutlineTwitter size={30}/></p>
        </div>
    )
}

export default Footer