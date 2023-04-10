import React from 'react' 
import styled  from 'styled-components';
import {RiBarChartHorizontalLine} from 'react-icons/ri'  
import Logo from './Logo';
import Cart from './Cart'
import {Link,NavLink} from 'react-router-dom'
import {HiUserCircle} from 'react-icons/hi'
import {links} from '../Helper/Links';
import {useProductContext} from '../Context/ProductProvider'

const Navbar = () => {
    const {openSideBar} = useProductContext();
 
  return (
    <Wrapper >
        <div className="left-side">
        <span className="sidebar-btn">
            <button className='side-btn' 
            onClick={()=>openSideBar()}
            ><RiBarChartHorizontalLine/>
            </button>
        </span>
        <div className="logo"> 
        <Logo/>
        </div>
        </div>

        <div className="links-component">
            {
                links.map((items)=>{
                    const {id,text,url} = items;
                    return(
                        <span key={id}>
                        <NavLink to={url} className='links'>{text}</NavLink>
                        </span>
                    )
                })
            }
            
            <NavLink className='links' to='/blogs' style={{display:'none'}}>Blogs</NavLink>
            
        </div>
 
        <div className="right-side">
            <Link className='login'><HiUserCircle/></Link>
            <Link to='/cart'><Cart/></Link>
        </div> 

    </Wrapper>
  )
}
// hello
const Wrapper =  styled.nav`
    display: flex; 
    padding: auto 10px;   
    align-items: center;
    box-shadow: 0.1px 0.1px 5px rgb(136, 97, 97);
   /* justify-content: space-between; */

   .login{
    display: none;
   }

.links{
    padding: 10px;
    margin-left:2rem ; 
    color: var(--links-text);
    text-decoration: none;
}
.links-component{
    display :none;
}

.sidebar-btn button{
background:transparent;
height: 40px; 
font-size: 35px;
border: none;
cursor: pointer;
}

.left-side{
    display: flex;
    align-items: center;
    margin-left:10px;
} 

.logo{
    margin-left:1rem ;
}
.right-side{ 
    display: flex; 
    right: 1rem;
    top: auto;
    position: absolute;
    justify-content: center;
    align-items: center;
 
}

.side-btn{
    color: black; 
}

.login{
    margin-right: 1rem;
    font-size: 35px;
    color: var(--links-text);
}
 
@media screen and (min-width:650px){
    .sidebar-btn{
        display: none;
    }
    .links-component{
        display: block;
        margin: 0 auto;
    }
    .right-side{
        margin-right: 2rem; 
        position: static;
    }
     
}
@media screen and (max-width:280px){
    .logo{ 
        margin-left: 0px;
        padding: 0%;

    }
    
}
 
 
`

export default Navbar