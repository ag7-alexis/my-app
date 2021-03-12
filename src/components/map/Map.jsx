import React, { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";
import {
  MapContainer,
  TileLayer,
  Marker,
  useMapEvents,
  useMap,
} from "react-leaflet";
import AddMarkers from "./AddMarkers";
import CenterUserLocation from "./CenterUserLocation";
import { useMarkerContext } from "../../contexts/MarkerContext";
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = L.icon({
  iconSize: [25, 41],
  iconAnchor: [10, 41],
  iconUrl: icon,
  shadowUrl: iconShadow,
});
L.Marker.prototype.options.icon = DefaultIcon;
const TILE_LAYER = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";

const customIcon = (urlPhoto, index) => {
  return L.icon({
    iconSize: [50, 50],
    iconAnchor: [30, 41],
    iconUrl:
      urlPhoto ||
      `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png`,
  });
};

const Map = () => {
  const { state } = useMarkerContext();

  return (
    <MapContainer
      zoom={13}
      scrollWheelZoom={false}
      style={{
        width: "100%",
        height: 500,
      }}
    >
      <TileLayer attribution={""} url={TILE_LAYER} />
      {state?.map((marker, index) => {
        return (
          <Marker
            key={`${index}-marker`}
            position={[marker[0], marker[1]]}
            icon={customIcon(marker[2], index + 1)}
          ></Marker>
        );
      })}

      <AddMarkers />
      <CenterUserLocation />
    </MapContainer>
  );
};

export default Map;
