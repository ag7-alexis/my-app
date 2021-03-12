import React from "react";
import { useMarkerContext } from "../../contexts/MarkerContext";
import Marker from "./Marker";

const ListMarkers = () => {
  const { state } = useMarkerContext();
  return (
    <>
      <h1>Liste des markers</h1>
      <ul>
        {state?.map((marker, index) => {
          return <Marker marker={marker} index={index} />;
        })}
      </ul>
    </>
  );
};

export default ListMarkers;
