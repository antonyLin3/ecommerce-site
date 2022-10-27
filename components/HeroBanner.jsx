import React from 'react'
import Link from 'next/link'
import { urlFor } from '../lib/client'
// 39:14
const HeroBanner = ({banner}) => {
  return (
    <div className='hero-banner-container'>
        <div>
            <p className='beats-solo'>{banner[0].smallText? banner[0].smallText: "none"}</p>
            <h3>{banner[0].midText}</h3>
            <h1>{banner[0].largeText}</h1>
            <img src={urlFor(banner[0].image).url()} alt='heads-phone' className='hero-banner-image'/>

            <div>
              <Link href={`/product/${banner.product}`}>
                <button className='button'>{banner[0].buttonText}</button>
              </Link>
              <div className='desc'>
                <h5>Describetion</h5>
                <p>descroption</p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default HeroBanner

