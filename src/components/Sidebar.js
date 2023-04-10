import React from 'react'
import { NavLink } from "react-router-dom";
import styled from 'styled-components'
import Logo from './Logo'
import {GrFormClose} from 'react-icons/gr'
import {links} from '../Helper/Links' 
import { useProductContext } from '../Context/ProductProvider';
 
const Sidebar = () => {
const {isSidebarOpen,closeSideBar} = useProductContext();
  return (
    <Wrapper>
        <aside className={isSidebarOpen?'sidebar show-sidebar':'sidebar'}>
          
        <div className="header">
            <Logo/>
            <button className='close-btn' onClick={()=>closeSideBar()}><GrFormClose/></button>
        </div>
        <div className="links-component">
        {links.map((items)=>{
          const {id,text,url} = items;
          return <ul key={id} >
            <NavLink to={url} className='links' onClick={closeSideBar}>{text}</NavLink> 
          </ul>
        })}
        <NavLink style={{display:'none'}} className='links blog' to='/blogs' onClick={()=>closeSideBar() }>Blogs</NavLink>
        </div> 
        <div className="underline"></div>
        </aside>
    </Wrapper>
  )
}

const Wrapper = styled.div`
.sidebar{
top: 0%;
left: 0%;
position: fixed;
width: 100vw;
height: 100vh;
z-index: 999;
transition: 0.3s linear;
transform: translateX(-100%);
background-color: var(--whitebackground);

}
.show-sidebar{
transform: translateX(0);
}
.header{ 
    justify-content: space-around;
    align-items: center;
    display: flex; 
    
}
.close-btn{
    background: transparent;
    padding: 0%;
    font-size: 40px;
    border: none;   
    color: red;
    cursor: pointer   ;
    
}  

 
.links{
  text-decoration: none;
  color: var(--links-text); 
  padding: 10px;
  text-transform: capitalize;
  outline: none;
  
}

ul{
  margin: 2rem 1rem; 
}

.blog{
  margin: 3.5rem;
  margin-bottom: 2rem;
}
 
 
 
 








`
export default Sidebar