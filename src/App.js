//=============== Dependencies ===============\\
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import History from './components/history';
import Help from './components/help';
import Home from './components/home';

//=============== Routes ===============\\
export default function App() {
  return (
    <Switch>
      
      <Route exact path="/" component={Home} />

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
  );
};
