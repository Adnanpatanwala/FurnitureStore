import React, { useEffect, useReducer } from 'react'
import { useContext,createContext } from 'react';
import  reducer  from '../Reducer/ProductReducer';
import 
{SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  PRODUCT_FETCHING,
  ISLOADING,
} from '../Helper/action'
import {products_url as url} from '../Helper/Links'

const ProductContext = createContext();

const initialstate = {
  isSidebarOpen:false,
  loading:false,
  error:false,
  featuredproducts:[],
  products:[],
  cart:[]
}
const ProductProvider = ({children}) => {

  const [state,dispatch] = useReducer(reducer,initialstate);

  const fetching = async(url)=>{
    dispatch({type:ISLOADING})
    try {
      const resp = await fetch(url);
      const data = await resp.json();
      dispatch({type:PRODUCT_FETCHING,playLoad:data})
      // console.log(data);
      
    } catch (error) {
      console.log('error');
    }
  }

  useEffect(()=>{ 
    fetching(url);
  },[])

  const openSideBar=()=>{
    dispatch({type:SIDEBAR_OPEN})
  }

  const closeSideBar=()=>{
    dispatch({type:SIDEBAR_CLOSE})
  }

  return ( 
    <ProductContext.Provider value={{
      ...state,
      openSideBar,
      closeSideBar,
    }}>
        {children}
    </ProductContext.Provider>
  )
}

export const useProductContext=()=>{
    return useContext(ProductContext);
}

export default ProductProvider;