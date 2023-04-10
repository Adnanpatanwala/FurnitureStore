import React from 'react'
import styled from 'styled-components'

const NewsLetters = () => {
  return ( 
    <Wrapper>

<div className="form">
    <h2>Subscribe to our Newsletters</h2>
    <p>and get exciting offers upto date!</p>
    <form className='fr'>
        <input type="email" />
        <button>Submit</button>
    </form>
</div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
.form{
    padding: 5rem 1rem;
    background-color:blanchedalmond;
    text-align: center;
} 
.fr input{ 
    font-size: 20px;
    padding: 0.5rem 0.5rem;
    border: none;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
}
.fr button{
    font-size: 20px;
    padding: 0.5rem 0.8rem;
    background-color: var(--links-text);
    color: white;
    border: none;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;


}
`

export default NewsLetters;