import React from 'react'
import styled from 'styled-components'
import AboutImage from '../Images/about.jpg'
const About = () => {
  return (
    <Wrapper className='page'>
    <div className="about">
      <article className="about-img">
        <img src={AboutImage} alt="" className='img' />
      </article>
      <div className="about-txt">
        <h1>About us</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, nulla sed excepturi, esse reprehenderit dolorum laudantium, saepe fugiat molestiae quasi quo? Dolore eveniet accusantium libero sequi ipsam, eaque, reiciendis atque numquam ea culpa magnam, veritatis voluptatem repellat consectetur aliquam facilis quisquam praesentium officiis nobis quia! Tenetur dicta iusto autem consectetur sapiente at maiores inventore nisi id architecto! Ratione iste laborum, aperiam culpa nobis assumenda sit molestias iure. Repudiandae obcaecati, vero, quibusdam delectus praesentium alias commodi ducimus, cupiditate rem nulla eaque. <br /> Eligendi quo vero eos minima ab quia saepe a rerum, assumenda nemo, maxime reprehenderit! Iure iusto soluta illum placeat repellendus illo architecto ducimus sequi odio corrupti modi nesciunt qui, eos hic, ab voluptatibus impedit necessitatibus molestias rerum veritatis quia dolorem expedita. <br />  brSimilique vel optio at velit assumenda veritatis minima eum quae quod! Facere ipsam aliquam debitis exercitationem, itaque voluptas quos qui aut tempore odio nostrum amet tenetur minus sed sint.</p>
      </div>
    </div>
    </Wrapper>
  )
}
const Wrapper = styled.div`

.about{
  padding: 2.5rem;
}
 
 .about-img{
  width: 220px; 
  height: 100%;
  position: relative;
  background-color: white;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 2rem;  
} 

img{ 
  box-shadow: 1px 1px 10px darkgray;
  width: 100%;
  height: 100%;
  /* border-radius: 10px; */
}


.about-img::before {
  content: '';
  position: absolute;
  width: 6%;
  height: 90%;
  background: #472929; 
  bottom: 1%;
  left: -5%;  
  border-right: none;
}
.about-img::after {
  content: '';
  position: absolute;  
  width: 30%;
  height: 30%;
  background-color: #472929;  
      top: -5%; 
      right: -5%; 
 } 

 @media screen and (min-width:600px) {
  .about{
    display: grid;
    grid-template-columns: 50% 50%;
  }
 }
`
export default About