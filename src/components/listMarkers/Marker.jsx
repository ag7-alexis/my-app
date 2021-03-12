import React from "react";
import { useMarkerContext } from "../../contexts/MarkerContext";

const Marker = ({ marker, index }) => {
  const { dispatch } = useMarkerContext();
  return (
    <li key={`${index}-marker`}>
      {index}
      <input
        value={marker[2]}
        onChange={(event) =>
          dispatch({
            type: "editPhoto",
            index,
            data: { urlPhoto: event.target.value },
          })
        }
      />
      <button onClick={() => dispatch({ type: "remove", index })}>
        Supprimer
      </button>
    </li>
  );
};

export default Marker;
