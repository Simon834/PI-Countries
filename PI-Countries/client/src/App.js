import "./App.css";
import LandingPage from "./views/LandingPage/landingPage";
import { Route, Switch } from "react-router-dom";
import Home from "./views/Home/home";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/home" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
