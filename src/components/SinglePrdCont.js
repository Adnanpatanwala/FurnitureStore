import React, { useState } from 'react'
import styled from 'styled-components'
import {formatePrice} from '../Helper/FormatePrice'
import Togglebtn from './Togglebtn'
import { Link } from 'react-router-dom'
import {TiTick} from 'react-icons/ti'
import { useCartContext } from '../Context/CartContext'

const SinglePrdCont = ({id,images:arr,name,description,category,company,price,review,stars,stock,shipping,colors}) => {
const [image,setImage] = useState(arr[0].url);
const [amount,setamount] = useState(1);
const [color,setColor] = useState(colors[0]);
const {addToCart} = useCartContext();
// console.log(colors);
  const increase = ()=>{
    setamount((old)=>{
        let temp = 0;
        temp = old +1 ;
        if(temp>stock){
            temp = stock;
        }
        return temp;
    })
  }
  const decrease = ()=>{
    setamount((old)=>{
        let temp = 0;
        temp = old -1 ;
        if(temp<1){
            temp = 1;
        }
        return temp;
    })
  }

 

  return ( 
    <Wrapper>
        <div className="containerforsingle">

        <div className="img">
        <div className="single-img">
        <img src={image} alt="images" />
        </div>
        <div className="arrayofimg">
            {arr.map((items,index)=>{
                return (
                    <div className="img-down" key={index}>  
                    <img src={items.url}  onClick={()=>setImage(arr[index].url)}
                    />
                    </div>
                )
            })}
        </div>
        </div>

        <div className="txt-container"> 
            <h2>{name}</h2>
            <p>{description}</p>
            <h4>Company : {company}</h4>
            <h4>Price : {formatePrice(price)}</h4>
            <h4>Shipping : {shipping?'Free':'Paid'}</h4>
            <div className="colors">
                {colors.map((items,index)=>{
                    return( 
                        <button 
                        key={index}
                        className={color==items?'color-btn-active color-btn':'color-btn'}
                        name='color' 
                        value={items}
                        onClick={()=>setColor(items)}
                        style={{backgroundColor:items}}
                        > 
                        {color==items?<TiTick/>:null}
                        </button>
                    )
                })}
            </div>
            <Togglebtn increase={increase} decrease={decrease} amount={amount}/>
            {
            stock>0?
                <Link to='/cart' style={{textDecoration:'none'}}>
            <button className='btn'  onClick={()=>addToCart(id,color,amount,name,price,stock,image)}>Add to cart </button>
            </Link>:null
            }
        </div>

        </div>
    </Wrapper>
  )
}

export default SinglePrdCont;

const Wrapper = styled.div`
text-transform: capitalize;

.colors{
    display: flex;
}

.color-btn{
  width:25px;
  height:25px;
  border:none;
  margin:0 0.3rem;
  padding: 0%.3rem;
  border-radius:50%;
  opacity:0.5;
  display:flex; 
  align-items:center;
  color:white;
  font-size:25px;
}
.color-btn-active{
  opacity:1;
}
.color-btn-all{
  background:transparent;
  border:none;
  text-transform:capitalize;
}
 
.img{
    max-width: 700px;
    display: block;
    margin-left: auto;
    margin-right: auto;
} 

.btn{
    background-color: #a11313;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    margin-left: auto;
    margin-right: auto;
    margin-top: 1rem;
    display: block;
}


.containerforsingle{  
    margin: 2rem;
    color: gray;
    h2{
        color: brown;
    }
}

.single-img{
    width: 100%;
    height: 300px;
    
    img{
        width: 100%;
        height: 100%;
        border-radius: 5px;
        object-fit: cover;
    }
}

.arrayofimg{
    display: flex;
    margin-top: 0.5rem;
    
    .img-down{
        width: 100%;
        height: 80px;
        img{ 
            width: 100%;
            height: 100%;
            object-fit: cover;
            cursor: pointer; 
        }
    }
}

@media screen  and (min-width:600px){
    .containerforsingle{
        display: grid;
        margin: 3rem; 
      grid-template-columns: 50% 50%;
    }
    .txt-container{
        padding: 1.5rem;
    }
}
`