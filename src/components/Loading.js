import React from 'react'
import styled from 'styled-components'
export const Loading = () => {
  return (
    <Wrapper> 
    <div className="loader"></div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
position: absolute;
text-align: center; 
top: 50%;
left: 50%;
transform: translate(-50%,-50%);
background-color:white;
 .loader{ 
  border: 10px solid rgb(228, 230, 231);
  border-top: 10px solid var(--links-text);
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: inline-block;
  animation: sniper 0.8s linear infinite;
  
 }

 @keyframes sniper {
  to{
    transform: rotate(360deg);
  }
 }
 
`
  
