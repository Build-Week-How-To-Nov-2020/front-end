import { Route } from "react-router-dom";
import HowToList from './components/HowToList';

import "./App.css";

function App() {
  return (
    <div className="App">
      <Route exact path="/">
        <HowToList />
      </Route>

      <Route path="/howtos">
        <HowToList />
      </Route>
    </div>
  );
}

export default App;
