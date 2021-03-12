import { useMapEvents } from "react-leaflet";
import { useMarkerContext } from "../../contexts/MarkerContext";

const AddMarkers = () => {
  const { dispatch } = useMarkerContext();
  useMapEvents({
    click(e) {
      const { lat, lng } = e.latlng;
      dispatch({ type: "add", data: [lat, lng] });
      if ("vibrate" in navigator) {
        navigator.vibrate(300);
      }
    },
  });
  return null;
};

export default AddMarkers;
