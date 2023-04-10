import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import {single_product_url} from '../Helper/Links'
import  {Loading } from '../components/Loading';
import SinglePrdCont from '../components/SinglePrdCont';

const SingleProduct = () => {
  const [loading,setloading] = useState(false);
  const [data,setData] = useState(null);
  let{id} = useParams();

  const fetchingSingle =async(url)=>{
    setloading(true);
    try {
      const resp = await fetch(url);
      const data  = await resp.json();
      setData(data);
      setloading(false);   
    } catch (error) {
      console.log(error);
    }
    
  }

  useEffect(()=>{
    fetchingSingle(`${single_product_url}${id}`);
  },[id]); 

  if(loading){
    return <div className="page">
     <Loading/>

    </div>
  }  
  // console.log(data);
  if(data){
  return ( 
    <div className="single-product-container page">
      <SinglePrdCont key={data.id} {...data}/>
    </div>
  )
  }
}

export default SingleProduct