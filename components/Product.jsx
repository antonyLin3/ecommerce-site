import React from 'react'
import Link from 'next/link'

import { urlFor } from '../lib/client'

const Product = ({ product }) => { 
  const {image, name, slug, price} = product 

  return (
    <>
      <Link href={`/product/${slug.current}`}>
        <div className='product-card'>
          <img 
            src={urlFor(image[0] && image[0]).url()}
            width={250}
            height={250}
            className="product-image"
          />
          <p className='product-name'>{name}</p>
          <p className='product-price'>${price}</p>
        </div>
      </Link>
    </>
  )
}

export default Product