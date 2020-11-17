import React from 'react'
import './App.css';
import { Route, Switch } from 'react-router-dom'
import Signup from './Signup'
import SignIn from './SignIn'
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/signin' component={SignIn} />
        <Route path='/signup' component={Signup} />      
      </Switch>
    </div>
  );
}

export default App;
