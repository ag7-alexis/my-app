import React from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import { useMarkerContext } from "../contexts/MarkerContext";
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

const Map = () => {
  const { state, dispatch } = useMarkerContext();
  // geolo
  //useEffect(() => {}, []);

  // add markers
  const Markers = () => {
    useMapEvents({
      click(e) {
        const { lat, lng } = e.latlng;
        dispatch({ type: "add", data: [lat, lng] });
        console.log(state);
      },
    });
    return null;
  };

  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={13}
      scrollWheelZoom={false}
      style={{
        width: 500,
        height: 500,
      }}
    >
      <TileLayer attribution={""} url={TILE_LAYER} />
      {state?.map((marker) => {
        return (
          <Marker
            key={`${marker}-marker`}
            position={[marker[0], marker[1]]}
          ></Marker>
        );
      })}

      <Markers />
    </MapContainer>
  );
};

export default Map;
