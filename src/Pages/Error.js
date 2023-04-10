import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
const Error = () => {
  return ( 
    <Wrapper className='page'>
      <div className='er'>
      <h3>Error!!!!</h3>
      <br/>
      <p>{`Page Not found :  ${'('}`}</p>
      <Link to='/'>
      <button className="btn">
        Go back?
      </button>
      </Link>
      </div>

    </Wrapper>
  )
}

const Wrapper = styled.div`
line-height: 0%;
display: flex;
justify-content: center;
align-items: center;
color: white; 
text-align: center;
font-size: larger;
.er{
  background-color: brown;
  padding: 2rem;
  border-radius: 50%; 
  button{ 
    margin-top: 1rem;
  }

}
`

export default Error