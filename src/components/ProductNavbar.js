import React from 'react'
import styled from 'styled-components'
import {BiSearchAlt2} from 'react-icons/bi'
import { useFilterContext } from '../Context/Filtercontext'
const ProductNavbar = () => {
    const {search,Filterfunction,sort,NavFilterfunction} = useFilterContext();
 
  return ( 
    <Wrapper>
        <div className="bar">
            <form onSubmit={(e)=>e.preventDefault()}>
                 <input type="text" placeholder='Search'
                 name='search'
                 value={search}
                 onChange={NavFilterfunction}
                 />
                </form>
            <div className="select">
                <h5>Sort by </h5>
                <select name="sort" id="sort"
                value={sort}
                onChange={NavFilterfunction}
                >
                    <option value="A-Z">A-Z</option>
                    <option value="Z-A">Z-A</option>
                    <option value="price(low-high)">price(low-high)</option>
                    <option value="price(high-low)">price(high-low)</option>
                </select>
            </div>

        </div>
    </Wrapper>
  )
}
const Wrapper = styled.nav`
position: sticky;
top: 0%;
left: 0%; 
z-index:1; 
.bar{ 
background-color:gainsboro;
display: grid;
grid-template-columns: 60% 40%;
justify-content: center;
align-items:center;
text-align:center;
align-content:center;

}
form{
    display: inline-block;
}
.bar input{  
    font-size: 20px;
    border: none;
    width: 60%; 
    padding: 0.3rem 1rem;
    border-radius: 10px;
    height: 2rem;
     
}
.select{
    display: flex;   
    align-items: center; 
    select{
        width: 50px;
        height: 30px;
        margin-left: 0.3rem;
    }
}  
 
`
export default ProductNavbar