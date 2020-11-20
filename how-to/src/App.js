import { BrowserRouter as Router, Route } from "react-router-dom";
import HowToList from "./components/HowToList";
// import HowToForm from "./components/HowToForm";
import Signup from './Signup'
import SignIn from './SignIn'
import Nav from './Nav'
import "./App.css"

function App() {
  return (
      <div className="App">
    <Router>
    <Nav />  
          <Route path='/signin' component={SignIn} />
          <Route path='/signup' component={Signup} />      
          {/** <Route path="/howtos/create" component={HowToForm} /> */}
          <Route path="/howtos" component={HowToList} />
          <Route exact path="/" component={SignIn} />
        
    </Router>
      </div>
  );
}

export default App;
