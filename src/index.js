import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import theme from './theme';
import {ChakraProvider} from '@chakra-ui/react';
import Navbar from './Components/Navbar';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Navbar/>
      <App />
    </ChakraProvider>
    
  </React.StrictMode>
);
