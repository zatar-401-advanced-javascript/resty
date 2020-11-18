import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import History from './components/history';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Help from './components/help'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />

      {/* <App /> */}
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/history">
          <main>
          <History isHistory={true} />
          </main>
        </Route>
        <Route path="/help" component={Help} />
        <Route>
          <div>
            <h2>404 Page not found</h2>
          </div>
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
