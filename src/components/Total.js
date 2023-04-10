import React from 'react'
import styled from 'styled-components'
import { useCartContext } from '../Context/CartContext';
import { formatePrice } from '../Helper/FormatePrice';
const Total = () => {
    const {totalamount,Shipping} = useCartContext();
  return ( 
    <Wrapper>

        <tbody className="total-center">
            <tr className="flex">
                <td>subtotal : </td>
                <td>{formatePrice(totalamount)}</td>
            </tr>
            <tr className="flex">
                <td>Shipping : </td>
                <td>{formatePrice(Shipping)}</td>
            </tr>
            <tr className="flex">
                <td>Total : </td>
                <td>{formatePrice(totalamount+Shipping)}</td>
            </tr>
        </tbody>
    </Wrapper>
  )
}

const Wrapper  = styled.div`
 display: flex;
 justify-content: center;
 text-transform: capitalize; 
 .total-center{
     display: inline-block;
     background-color: white;
     border-radius: 10px;
     padding: 15px;
     color: black; 
     text-align: left;
     border: 1px solid gray;
    }

`

export default Total