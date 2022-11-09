import React from 'react'
import { Product, FooterBanner, HeroBanner } from '../components' 
import { client } from '../lib/client'

const Home = ({products, bannerData}) => {
  return (
    <>
    <HeroBanner banner={bannerData}/>
      {console.log(products, bannerData)}
      <div className='products-heading'>
        <h2>最暢銷商品</h2>
        <p>現在都在特價中</p>
      </div>

      <div className='products-container'>
        {products?.map((product) => <Product key={product.id} product={product} />)}
      </div>
      

      <FooterBanner footerBanner={bannerData[0]}/>
    </>
      
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]'
  const products = await client.fetch(query)

  const bannerQuery = '*[_type == "banner"]'
  const bannerData = await client.fetch(bannerQuery)

  return {
    props: {products, bannerData}
  }

}


export default Home