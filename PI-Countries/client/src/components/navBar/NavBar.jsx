import "./NavBarStyles.css";

import { Link, useHistory } from "react-router-dom";

import logo from "../../auxfiles/logo.png";
import SearchBar from "./SearchBar";

export default function NavBar() {
  return (
    <>
      <div className="NavBar">
        <div className="leftSide">
          <a href="/home">
            <img src={logo} alt="" className="logo" />
          </a>
          <a href="/createactivity" className="linkAct">
            Create your own Activity
          </a>
        </div>
        <div className="rightSide">
          <SearchBar />
        </div>
      </div>
    </>
  );
}
