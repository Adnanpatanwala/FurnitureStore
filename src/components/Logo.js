import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../Images/furniture-logo.png'

const Logo = () => {
  return ( 
    <Wrapper> 
      <span className="logo">
        <img src={logo} alt='logo'/>
        <h1>WOODIES</h1>
      </span>
      
    </Wrapper>
  )
}

const Wrapper = styled.span`
display: inline-block;
.logo{
  display: flex;
  align-items: center;
  
}
img{ 
    height: 40px;
}
 
h1{
    color: brown; 
    font-family: 'Mukta', sans-serif;
}

.active{
  border-bottom: none;
}

`


export default Logo