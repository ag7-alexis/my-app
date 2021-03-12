import React from "react";
import { useEffect, useState } from "react";
import { useMap } from "react-leaflet";

// geolocation
const CenterUserLocation = () => {
  const [isGeoloc, setIsGeoloc] = useState(false);
  const [userPosition, setUserPosition] = useState([51.505, -0.09]);
  const map = useMap();

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((geo) => {
        setUserPosition([geo?.coords?.latitude, geo?.coords?.longitude]);
      });
    }
  }, []);

  useEffect(() => {
    map.setView(userPosition);
  }, [isGeoloc]);

  return (
    <>
      <button
        style={{ zIndex: "500", position: "absolute", right: "0" }}
        onClickCapture={(e) => {
          e.nativeEvent.stopPropagation();
          setIsGeoloc(!isGeoloc);
        }}
      >
        Me géolocaliser
      </button>
    </>
  );
};

export default CenterUserLocation;
