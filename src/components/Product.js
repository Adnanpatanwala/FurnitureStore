import React from 'react'
import styled from 'styled-components'
import {formatePrice} from '../Helper/FormatePrice'
import {Link} from 'react-router-dom';
const Product = ({name,price,image,id,description}) => {

  // console.log(typeof description);
  return ( 
    <Wrapper>
    <div className="products">
        <img src={image} alt="image"/>
        <div className="info">
            <p>{name}</p>
            <p>{formatePrice(price)}</p>
        </div>
        <p className='desc'>{description.substring(0,90)}.....
        
        </p>
        <Link to={`/products/${id}`} style={{textDecoration:'none'}}>
        <button className='buy-btn'>View</button>
        </Link>
    </div>
    </Wrapper>
  )
}

const Wrapper = styled.article` 
 .products{  
    margin: 0.8rem 1rem; 
    box-shadow: 0.5px 0.3px 10px lightgray;
    background-color: white;
    padding: 1rem;
    border-radius: 10px; 
  }
 
.desc{
  color: gray;
  font-size: 13px;  
  text-transform: lowercase;
}

  .info{
    display: flex;
    justify-content: space-between;
  }
  .products img{
    width: 100%;
    object-fit: cover;
    height: 200px;
    border-radius: 10px;
  }
  .products p{
    text-transform: capitalize;

  }


  .buy-btn{  
    padding: 0.3rem 1rem;
    /* width: 100%; */
    border-radius: 5px;
    border: none;
    color: white;
    background-color: #e4e435;
    display: block;
    margin-left: auto;
    margin-right: 0%;

  }

   

 
`

export default Product