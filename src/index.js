//=============== Dependencies ===============\\
import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { BrowserRouter} from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './components/header/header';
import Footer from './components/footer/footer';

//=============== DOM ===============\\
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <App />
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
