import React from 'react'
import styled from 'styled-components'
import getUniquevalue from '../Helper/unique';
import { formatePrice } from '../Helper/FormatePrice';
import { useFilterContext } from '../Context/Filtercontext';
import {TiTick} from 'react-icons/ti';
const FilterSideBar = () => {
  const {filter:{color,category,price,shipping,max_Price},all_products,Filterfunction,closeFilter,resetfilter,applychanges} = useFilterContext();
  const companies = getUniquevalue(all_products,'company');
  const categories = getUniquevalue(all_products,'category');
  const colors = getUniquevalue(all_products,'colors')
  // console.log(colors);
  return (
    <Wrapper> 
      <div className="container-filter">
        <h3>filter</h3>
        <form onSubmit={(e)=>e.preventDefault()}>
          <div className="form-company">
          <h4>Company : </h4>
          <select name="company" id="company" 
          className='company'
          onChange={Filterfunction}
          >
            {
              companies.map((items,index)=>{
                return <option
                key={index}
                value={items}
                >
                  {items}
                </option>
              })
            }
              </select>
        
          </div>


          <div className="form-category">
            <h4>Categories</h4>
            {categories.map((items,index)=>{
              return <button
              key={index}
              className={category==items?'category-btn-active category-btn':'category-btn'}
              name='category'
              onClick={Filterfunction}
              
              >
                {items}
              </button>
            })}
          </div>

            <div className="form-color">
              <h4>Colors</h4>
              <div className="center-color">

              {
                colors.map((items,index)=>{
                  if(items=='all'){
                    return <button 
                    key={index} 
                    data-color='all'
                    // value='all'
                    className={color==items?'color-btn-all-all':'color-btn-all'} 
                    name='color'
                    onClick={Filterfunction}
                    > 
                    all
                    </button>
                  }
                  return <button 
                  key={index}
                  className={color==items?'color-btn-active color-btn':'color-btn'}
                  name='color'
                  onClick={Filterfunction}
                  // value={items}
                  data-color={items}
                  style={{backgroundColor:items}}
                  > 
                  {color==items?<TiTick/>:null}
                  </button>
                })
              }
                </div>
            </div>

              <h4>Price</h4>
            <div className="form-toggle">
              <div className="center-p">

              <span className='p-0-m'>0</span>
              <input type="range" 
              name="price" 
              id="price"
              min={0} 
              value={price}
              max={max_Price}
              onChange={Filterfunction}
              />
               <span className='p-0-m'>{max_Price}</span>
              </div>
               <p >{formatePrice(price)}</p>
            </div>

              <div className="form-shipping">
                <h4>shipping</h4>
                <div className="cont">
                <h4>Free shipping : </h4>
                <input type="checkbox"
                checked={shipping}
                name='shipping' 
                onChange={Filterfunction}
                />
                </div>
              </div>

 
              <div className="last">
                <button onClick={closeFilter} className='close'>Close</button>
                <button onClick={()=>resetfilter()}>Reset</button>
                <button onClick={()=>applychanges()}>Apply</button>
              </div>












        </ form>
      
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
 padding:0 1rem; 
  
  

 .container-filter{
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  box-shadow: 1px 1px 5px gray;
  background-color: white;
  line-height: 0%;
  padding: 1rem;
  border-radius: 10px;
  z-index: 1;
 }


 .last{
  justify-content:center;
  text-align:center; 
  button{
    padding:0.6rem 0.7rem;
    margin: 0 0.3rem;
    color:white; 
    background-color:rgb(192, 129, 13);
    border:none;
    border-radius:5px; 

  }

}

.p-0-m{
  font-size: 0.8rem;
}
.center-p{
  display: flex;
  justify-content: center;
  align-items: center;
}

.cont{
display:flex; 
justify-content:center;
text-align:center; 

input{
  width:1rem;
}
}

.form-toggle{
  justify-content:center;
  text-align:center; 
  span{
    padding: 0 0.2rem;
    color:gray;
    
  }
  p{
    color:green;
  }
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

.color-btn-all-all{
  background-color:rgb(192, 129, 13);
  border:none;
  border-radius:5px;
  color:white;
}

.center-color{
  display:flex;
  align-items:center; 
}

.company{
  padding: 0.2rem 1rem;
  width:100%;
  font-size:1rem;
  text-transform:capitalize;
}

.category-btn{
  background:transparent;
  border:none;
  text-transform:capitalize;
  padding:0.3rem;
  margin:0.2rem;
}

.category-btn-active{
  background-color:rgb(192, 129, 13);
border-radius:10px;
color:white;
}

h4{
  color:gray;
}

.filter-btn{
  background:transparent;
  border : none;
  text-transform:capitalize;
  color:gray;
  margin-right:0.4rem;
}
.btn-active{
  border-bottom:1px solid gray;
} 

@media screen and (min-width: 600px){
  .container-filter{  
  background-color:white; 
  line-height:0px; 
  padding:1rem;
  position:sticky; 
  top: 0%;
  left: 0%;
  transform: translate(0,0);
  box-shadow: none;
  z-index: 0;
} 
.close{
  display: none;
}
}

 
`

export default FilterSideBar