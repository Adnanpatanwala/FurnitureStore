import React from 'react'
import Logo from './Logo'
import styled from 'styled-components'

const Footer = () => {
  return ( 
    <Wrapper>   
        <div className="underline"></div>
            <span className="logo-footer">
        <Logo/>
            </span>
         <h5> &copy; 2023  All rights reserved</h5>
    

    </Wrapper>
  )
}
const Wrapper = styled.div` 
  
 text-align: center;  
 line-height: 0;
 
  
`
export default Footer