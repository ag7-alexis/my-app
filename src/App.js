import React, { useReducer, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
} from "react-router-dom";
import markerReducer from "./reducers/markerReducer";
import MarkerContext from "./contexts/MarkerContext";
import Map from "./components/map/Map";
import ListMarkers from "./components/listMarkers/ListMarkers";
import "./App.css";
import UserInfos from "./components/userInfos/UserInfos";

function App() {
  const [state, dispatch] = useReducer(markerReducer, []);
  const [user, setUser] = useState({ lastname: "", firstname: "", email: "" });
  const context = { state, dispatch };
  return (
    <Router>
      <Link to="/" style={{ marginRight: "20px" }}>
        Accueil
      </Link>
      <Link to="/markers" style={{ marginRight: "20px" }}>
        Liste Markers
      </Link>
      <Link to="/infos">Mes informations</Link>
      <div>
        <p>firstname: {user?.firstname}</p>
        <p>lastname: {user?.lastname}</p>
        <p>email: {user?.email}</p>
      </div>
      <Switch>
        <Route path="/infos">
          <UserInfos user={user} setUser={setUser} />
        </Route>
        <MarkerContext.Provider value={context}>
          <Route exact path="/">
            <Map />
          </Route>
          <Route path="/markers">
            <ListMarkers />
          </Route>
        </MarkerContext.Provider>
      </Switch>
    </Router>
  );
}

export default App;
