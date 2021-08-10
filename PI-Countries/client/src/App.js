import "./App.css";
import LandingPage from "./views/LandingPage/landingPage";
import { Route, Switch } from "react-router-dom";
import Home from "./views/Home/home";
import NavBar from "./components/navBar/NavBar";
import SearchID from "./views/SearchByID/searchID";
import { useLocation } from "react-router-dom";
import SearchResults from "./views/searchResults/searchResults";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      {location.pathname === "/" ? null : <NavBar />}
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/home" component={Home} />
        <Route path="/search/:ID" component={SearchID} />
        <Route exact path="/searchResults" component={SearchResults} />
      </Switch>
    </div>
  );
}

export default App;
