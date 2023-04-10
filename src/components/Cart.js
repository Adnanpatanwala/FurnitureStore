import React from 'react'
import styled from 'styled-components'
import {BsCart2} from 'react-icons/bs' 
import {useCartContext} from '../Context/CartContext'

const Cart = () => { 
  const {totalItems} = useCartContext();
  return ( 
    <Wrapper>
          <span className="cart">
            <span className='amount'>{totalItems}</span>
            <span className="cart-logo">
            <BsCart2/>
            </span>
            </span>
    </Wrapper>
  )
}
const Wrapper = styled.div`
.cart-logo{
    font-size: 25px; 
    color: var(--links-text);
}   
.amount{
    top: -0.2rem;
    right: -0.4rem;
    color: white;
    position: absolute;
    background-color: brown;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    width:1.3rem ;
    height: 1.3rem;
    z-index: 1;
}

@media screen and (min-width:650px){
  .amount{
    top: 0.9rem;
    right: 1.5rem;
  }
}

`

export default Cart