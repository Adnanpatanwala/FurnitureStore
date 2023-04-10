import React, { useContext, useEffect, useReducer } from 'react'
import { createContext } from 'react'
import {ADD_TO_CART,Cart_Update,Total_cart_amount} from '../Helper/action'
import {reducer} from '../Reducer/CartReducer';

const initialstate ={
cart:[],
totalItems:0,
totalamount:0,
Shipping:400, 
}
const ContextProvider =  createContext();
export const CartContext = ({children}) => {

    const [state,dispatch] = useReducer(reducer,initialstate);
    const addToCart=(id,color,amount,name,price,stock,image)=>{
        dispatch({type:ADD_TO_CART,playload:{id,color,amount,name,price,stock,image}})
    } 
 
  const toggleAmont=(id,type)=>{
    dispatch({type:Cart_Update,playload:{id,type}});
  }

  useEffect(()=>{
dispatch({type:Total_cart_amount})
  },[state.cart])
 


  return ( 
    <ContextProvider.Provider 
    value={{
        ...state,
        addToCart,
        toggleAmont
    }}
    >
    {children}
    </ContextProvider.Provider>
  )
}

export const useCartContext = ()=>{
    return useContext(ContextProvider);
}
 