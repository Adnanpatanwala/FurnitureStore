 import {BrowserRouter,Routes,Route} from 'react-router-dom';
 import NavBar from './components/Navbar';
 import Sidebar from './components/Sidebar';
 import Home from './Pages/Home'
 import About from './Pages/About'
 import Products from './Pages/Products'
 import Error from './Pages/Error'
 import Cart from './Pages/Cart'
 import Blogs from './Pages/Blogs'
 import SingleProduct from './Pages/SingleProduct';
 import Footer from './components/Footer'
function App() {
  return ( 
    <>
    <BrowserRouter>
    <NavBar/>
    <Sidebar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='products' element={<Products/>}/>
      <Route path='products/:id' element={<SingleProduct/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/blogs' element={<Blogs/>}/>
      <Route path='*' element={<Error/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
