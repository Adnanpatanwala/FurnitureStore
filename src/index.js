import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ProductProvider from './Context/ProductProvider';
import Filtercontext from './Context/Filtercontext'; 
import {CartContext} from './Context/CartContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ProductProvider>
      <Filtercontext>
        <CartContext>
          <App />
        </CartContext>
      </Filtercontext>
    </ProductProvider>
  </React.StrictMode>
);
 
reportWebVitals();


