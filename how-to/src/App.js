import React from 'react'
import './App.css';
import { Route, Switch } from 'react-router-dom'
import XSignup from './XSignup'
import XSignIn from './XSignIn'
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/signin' component={XSignIn} />
        <Route path= '/signup' component={XSignup} />      
      </Switch>
    </div>
  );
}

export default App;
