import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HowToList from "./components/HowToList";
// import HowToForm from "./components/HowToForm";
import Signup from './Signup'
import SignIn from './SignIn'
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={SignIn} />
          <Route path='/signin' component={SignIn} />
          <Route path='/signup' component={Signup} />      
          {/** <Route path="/howtos/create" component={HowToForm} /> */}
          <Route path="/howtos" component={HowToList} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
