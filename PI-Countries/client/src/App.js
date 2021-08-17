import "./App.css";
import LandingPage from "./views/LandingPage/landingPage";
import { Route, Switch } from "react-router-dom";
import Home from "./views/Home/home";
import NavBar from "./components/navBar/NavBar";
import SearchID from "./views/SearchByID/searchID";
import SearchResult from "./views/searchResults/searchResults";
import { useLocation } from "react-router-dom";
import CreateActivity from "./views/createActivity/createActivity";

function App() {
  const location = useLocation();
  return (
    <>
      {location.pathname === "/" ? null : <NavBar />}
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/searchResult/:name" component={SearchResult} />
        <Route path="/search/:ID" component={SearchID} />
        <Route exact path="/createactivity" component={CreateActivity} />
      </Switch>
    </>
  );
}

export default App;
