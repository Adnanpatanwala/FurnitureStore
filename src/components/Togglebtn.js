import React from 'react'
import styled from 'styled-components'
import {AiOutlinePlus,AiOutlineMinus} from 'react-icons/ai'
// import {}

const Togglebtn = ({increase,decrease,amount}) => {
 
  return ( 
    <Wrapper>
        <div className="toggle-container">
            <button onClick={()=>decrease()}><AiOutlineMinus/></button>
            <p>{amount}</p>
            <button onClick={()=>increase()}><AiOutlinePlus/></button>
        </div>
    </Wrapper>
  )
}
const Wrapper = styled.div`
.toggle-container{
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    p{
        color: #5a5959;
        font-weight: bolder;
        font-size: 30px;
    }
    button{
        width: 30px;
        height: 30px;
        font-size: 15px; 
        margin: 0.5rem;
        background: transparent;
        background-color: brown;
        border: none;
        color: white;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
`
export default Togglebtn