import React, { useCallback, useEffect, useReducer, useState } from 'react'
import { useContext ,createContext} from 'react'
import { useProductContext } from './ProductProvider';
import{
  FEATURED_PRODUCTS,
  Nav_Search_Products,
  Sort_Items, 
  Filter_Products_Update,
  OPEN_FILTER,
  CLOSE_FILTER,
  RESET_FILTER,
  SEARCH_PRODUCTS,
  APPLY_CHANGES,
  Apply_filter,
  Loading_Filter
} from '../Helper/action';
import reducer from '../Reducer/FilterReducer'

const Context = createContext();
const initialstate = {
  loadingfilter:true, 
  all_products:[],
  applyfilter:false,
  filtered_products:[],
  sort:'A-Z',
  search:'',
  isFilterOpen:false,
  filter:{
  company:'all',
  category:'all',
  color:'all',
  shipping:true,
  max_Price:0,
  price:0,

}
}
const Filtercontext = ({children}) => {
  const {products} = useProductContext();
  const [state,dispatch] = useReducer(reducer,initialstate);
// const [applyfilter,setApplyfilter] = useState(false);

    useEffect(()=>{
      dispatch({type:Loading_Filter})
      dispatch({type:FEATURED_PRODUCTS,playLoad:products});
    },[products]);
    
    useEffect(()=>{  
      dispatch({type:Loading_Filter})
      dispatch({type:SEARCH_PRODUCTS})
    },[state.search]);
    
    useEffect(()=>{ 
      dispatch({type:Loading_Filter})
      dispatch({type:Sort_Items})
    },[state.sort]);

 const openFilter =()=>{
dispatch({type:OPEN_FILTER})
 }
 const closeFilter =()=>{

dispatch({type:CLOSE_FILTER})
 }

 const resetfilter=()=>{
dispatch({type:RESET_FILTER})
 }
 

    const Filterfunction=(e)=>{
      let value = e.target.value; 
      let name  = e.target.name;
      if(name=='category'){
        value = e.target.textContent;
      }
      if(name=='shipping'){
        value = e.target.checked;
      }
      if(name=='price'){  
        value  = Number(value);
      }
      if(name=='color'){ 
        value = e.target.dataset.color;
      }  
      dispatch({type:Filter_Products_Update,playLoad:{name,value}});
    }
    
     const NavFilterfunction=(e)=>{
      let value = e.target.value; 
      let name  = e.target.name; 
      dispatch({type:Nav_Search_Products,playLoad:{name,value}}); 
    }
 const applychanges = ()=>{
  dispatch({type:Apply_filter});
}
useEffect(()=>{ 
  dispatch({type:APPLY_CHANGES});
  },[state.applyfilter])


  return ( 
    <Context.Provider 
    value={{
        ...state, 
        Filterfunction,
        openFilter,
        closeFilter,
        resetfilter,
        NavFilterfunction,
        applychanges, 
    }}
    >
        {children}
    </Context.Provider>
  )
}

export default Filtercontext;

export const useFilterContext=()=>{
   return useContext(Context);
} 