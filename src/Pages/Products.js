import React from 'react'
import ProductNavbar from '../components/ProductNavbar'
// import styled from 'styled-components'
import styled from 'styled-components'
import Product from '../components/Product' 
import { Loading } from '../components/Loading'
import {FaFilter} from 'react-icons/fa';
import { useFilterContext } from '../Context/Filtercontext'
import FilterSideBar from '../components/FilterSideBar'
import { useProductContext } from '../Context/ProductProvider'
const Products = () => { 
  const {filtered_products:products,isFilterOpen,openFilter} = useFilterContext();  
  const {loading} = useProductContext()
  if(loading){
  return <div className="page">
  <Loading/>
  </div>
  
  }

    
  return ( 
    <Wrapper className='page'>
      <ProductNavbar/>
      <div>
    <div className='products-components'> 
       <div className="complete">
      <div className="filter-nav">
       <h3>Produsts----</h3> 
       <button onClick={openFilter} className='fil-btn'>Filter<FaFilter/></button>
      </div>
       <div className="windows-container">
       <FilterSideBar/>
       </div> 
       <div className="filter-mobile-block">
       {isFilterOpen && <FilterSideBar/>}
       </div>
      </div> 
 
    <div className="products-components-main">

      {products.map((items)=>{
        return  <Product key={items.id} {...items}/>
      })}
    </div>
      </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
 
 
 
  .fil-btn{ 
    height:2.5rem;
    background-color:transparent;
    border:1px solid gray;
    border-radius:5px;
    color: green;
  } 
 
 .windows-container{
   display:none;
  }
  .filter-nav{
   align-items:center;
   justify-content:space-between;  
  display:flex;
  padding: 0 1rem;
  color: gray;
  

 }
    @media screen and (min-width: 600px){
      .filter-mobile-block{
        display: none;
      }
      .products-components{
    display: grid; 
    grid-template-columns: 230px 1fr;
    padding: 1rem;
    background-color:rgb(245, 249, 253);
  }
  .products-components-main{
    display: grid;
    grid-template-columns: repeat(auto-fit ,minmax(280px,0.5fr)) ;
    /* background-color: #eef9fd; */
  }
  .complete{  
    .fil-btn{
      display:none;
    }
  }

  .windows-container{
    display:block; 
    position: sticky;
    top: 10%;
    left: 0%;
  }
 
  }
`
export default Products;