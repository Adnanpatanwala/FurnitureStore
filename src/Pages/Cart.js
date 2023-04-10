import React from 'react'
import { useCartContext } from '../Context/CartContext'
import styled from 'styled-components';
import {formatePrice} from '../Helper/FormatePrice'
import Togglebtn from '../components/Togglebtn';
import Total from '../components/Total';
import { Link } from 'react-router-dom';
import {Loading} from '../components/Loading';
const Cart = () => {
  const {cart,loading,toggleAmont} = useCartContext();

   



  if(cart.length<1){
    return (
      <div className='page' style={{display:'flex',justifyContent:'center',alignItems:'center',textAlign:'center'}}>
        <div>
      <h2>
        No items in the Cart
      </h2>
        <Link to='/products'> 
        <button className='btn'>Continue shopping?</button>
        </Link>
        </div>
      </div>
    )
  }
    
  return ( 
<Wrapper className='page'>
    <div className="cart-total-container">

      <table>
        <tbody>

        <tr> 
          <th>Product</th> 
          <th>Amount</th>
          <th className='Itemtotal'>SubTotal</th>
        </tr>
        </tbody>
      {cart.map((items)=>{
        const {amount,color,id,name,price,stock,image} = items;

        return ( 
          
          <tbody key={items.id}>

          <tr> 
            <td> 
              <div className="flx">

              <img src={image} alt="Image" className='cart-img'/>
              <div className="info-cart">
                <h5>{name}</h5>
                <p className='pc'>{formatePrice(price)}</p>
                  <h5 className='mob'>{formatePrice(price*amount)}</h5>
                 
              </div>
              </div>
              </td> 
              <td>
                <Togglebtn increase={()=>toggleAmont(id,'inc')} decrease={()=>toggleAmont(id,'dec')} amount={amount}/>
              </td>

              <td className="Itemtotal">
                <div>
                  <h4>{formatePrice(price*amount)}</h4>
                </div>
              </td>

          </tr>
          </tbody>

        )
      })} 
</table>
 
    </div> 

    <div className="total">
      <Total/>
    </div>

</Wrapper>
  )
}
const Wrapper = styled.div`

.flx{
  display: flex;
  justify-content: center;
  align-items: center;
}

@media screen and (max-width: 350px){
  .flx{
    display: block;
  }
}



.cart-total-container{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
  
}
 

 

 td{
  justify-content: center;
  align-items: center;
  text-align: center;
  padding:  0.1rem 1rem;
 }
.cartItems{
  display: flex;
}
 

.info-cart{ 
  line-height: 0%; 
  align-items: center; 
  text-transform: capitalize;
  margin-left: 0.3rem;
  p{ 
    font-size: 15px;
  }
} 

.cart-img{
  width: 6rem;
  height: 4rem;
  object-fit: cover;
  border-radius: 10px;
} 
.Itemtotal{
  display: none;
}
.pc{
  display: none;
}

.mob{
  display: block;
}
@media screen and (min-width: 600px) {
  .mob{
 display:none ;
  }
  .Itemtotal{
    display: inline;
  }
  .pc{
    display: block;
  }
  
  .cart-img{
    width: 5rem;
    height: 3rem;
  }
  
}

`
export default Cart