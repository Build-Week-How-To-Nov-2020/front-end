import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HowToList from "./components/HowToList";
import HowToForm from "./components/HowToForm";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <HowToList />
          </Route>

          <Route path="/howtos/create">
            <HowToForm />
          </Route>

          <Route path="/howtos">
            <HowToList />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
