import React from 'react'
import BackgroundImage from '../Images/backgorund.jpg';
import styled from 'styled-components';
import FeaturedProducts from '../components/FeaturedProducts';
import {Link} from 'react-router-dom'  
import NewsLetters from '../components/NewsLetters';
const Home = () => {
  return ( 
    <Wrapper className='page'>
      <div className="top ">

     <div className="background">
    <img src={BackgroundImage} alt="image" />

    <div className="background-text">
      <h1>Design Your <br /> Comfort Zone</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur repudiandae laboriosam tempore numquam enim tempora.</p>
      <p className="bigscreen">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium vero repudiandae distinctio beatae ipsam eligendi necessitatibus error nemo repellendus atque pariatur nobis alias in facere, ea aliquid esse sequi recusandae!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae officiis labore impedit?
      </p>
      <Link className='btn' to='/products' >Buy Now</Link>
    </div>
    </div>
      </div>
    <FeaturedProducts/>
    <NewsLetters/>
    
    </Wrapper>
  )
}
const Wrapper = styled.div`

  .background img{
    width: 100%; 
    height :100% ;
    /* position: relative; */
  } 
  .background{ 
    position: relative;  
  }
  .background-text{
    position: absolute; 
    top: 1rem;
    right: 2rem;
    text-align: right;
    max-width: 10rem;
    min-width: 6rem ;
  }
  .bigscreen{
    display: none;
  }
  
  .background-text h1{
    color: var(--white-text) ;
    font-size: 1rem;
  }
  .background-text p{
    color: #eae8fc;
    font-size: 0.75rem;
    margin: 1rem 0;
  }
 
  .top{ 
    display: block;
  }
  @media screen and (min-width:650px){
    .background img{
      height: 85vh;
      width: 100vw;
    }

    .background-text{
      top: 3rem;
      right: 5rem;
      max-width: 25rem;
    }
    .bigscreen{
      display: block;
      margin: 2rem 0;
      font-size: 1.2rem;
    }

  }
  @media screen and (min-width:1200px){
    .background-text p{
      font-size: 1rem;
    }
    .background-text{
      max-width: 35rem;
    }
    .background h1{
      font-size: 1.6rem;
    }
  }
`

export default Home