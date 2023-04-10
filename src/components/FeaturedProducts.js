import React from 'react'
import { useProductContext } from '../Context/ProductProvider'
import styled from 'styled-components'
import { Loading } from './Loading'
import {TbArmchair2} from 'react-icons/tb'
import Product from './Product'
const FeaturedProducts = () => {
const {featuredproducts,error,loading} = useProductContext();
// console.log(featuredproducts);
if(loading){
    return <div className="section-center">
      <Loading/>
    </div>
}
  return (
    <Wrapper>
      <div className="heading">
        <h2><TbArmchair2/> Featured Products</h2>
        <div className="small-underline"></div>
      </div>
      <div className="products-components">
        {featuredproducts.map((items)=>{
          const {id} = items;
          return( 
            <Product key={id} {...items}/>
          )
        })}
      </div>
     
    </Wrapper>
  )
}
const Wrapper = styled.section`
   
  .products-components{ 
    text-align: center; 
    
  }
  @media screen and (min-width: 600px){
    .products-components{
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(360px,1fr));
    }
  }
    

`
export default FeaturedProducts