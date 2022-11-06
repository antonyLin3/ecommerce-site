import React, { useState } from 'react'
import { Product } from '../../components'
import { client, urlFor} from '../../lib/client'
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { useStateContext } from '../../context/StateContext'

const productDetails = ({ product, products}) => {
  const { image, name, details, price } = product[0] 
  const [index, setIndex] = useState(0)
  const { decQty, incQty, qty, onAdd } = useStateContext()
  // 這裡先強制給定0個產品
  console.log(product)
  return (
    <div>
      <div className='product-details-container'>
        <div>
          <div className='image-container'>
            {image && <img src={urlFor(image[`${index}`])}/>}

            <div
            className='small-image-container'>
              {image?.map((item, i) => {
                return <img 
                  key={i}
                  src={urlFor(item)}
                  className={i === index && "small-image-selected"}
                  onMouseEnter={() => (setIndex(i))}
                />
                })}
            </div>
          </div>
          

          <div className='product-desc'>
            <h1>{name}</h1>
            <div className='reviews'>
              <div className='reviews-star'>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
              </div>
              <p>
                (20)
              </p>
            </div>
            <h4> Details:</h4>
            <p>{details}</p>
            <p className='price'>${price}</p>
            <div className='quantity'>
              <h3>Quantity:</h3>
              <p className='quantity-desc'>
                <span className='minus' onClick={decQty}><AiOutlineMinus size={25}/></span>
                <span className='num'>{qty}</span>
                <span className='plus' onClick={incQty}><AiOutlinePlus size={25}/></span>
              </p>
            </div>
            <button type='button' className='add-to-cart' onClick={()=>{onAdd(product[0], qty)}}>加入購物車</button>
            <button type='button' className='buy-now' >直接購買</button>

            
          </div>
        </div>
      </div>
      <div className='may-like'>
        <h2>你可能也喜歡</h2>
        <div className='marquee'>
          <div className='may-like-product-container'>
            {products.map((item, i)=> (<Product key={item._id} product={item}/>))}
          </div>
        </div>
      </div>
    </div>
  )
}

export const  getStaticProps = async ( { params: { slug } } ) => {
  //使用 getstaticProps可以desturcture
  const query = `*[_type == "product" && slug.current == '${slug}']`
  const productsQuery = '*[_type == "product"]'

  const product = await client.fetch(query)
  const products = await client.fetch(productsQuery)


  return {
    props: {product, products}
  }
}

export const getStaticPaths = async () => {
  return {
      paths: [], //indicates that no page needs be created at build time
      fallback: 'blocking' //indicates the type of fallback
  }
}

export default productDetails
