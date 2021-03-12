import React, { useReducer } from "react";
import markerReducer from "./reducers/markerReducer";
import MarkerContext from "./contexts/MarkerContext";
import Map from "./components/Map";
import "./App.css";

function App() {
  const [state, dispatch] = useReducer(markerReducer, []);
  const context = { state, dispatch };
  return (
    <MarkerContext.Provider value={context}>
      <Map />
    </MarkerContext.Provider>
  );
}

export default App;
