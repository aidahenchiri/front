import React from 'react';
import store from './JS/Store/Store';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>

   <Provider store={store}>
  <React.StrictMode>
    <App />
    <ToastContainer />

  </React.StrictMode>
  </Provider>
  </BrowserRouter>
);

