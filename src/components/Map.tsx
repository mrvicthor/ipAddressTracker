import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import { useEffect } from "react";

interface Props {
  lat: number;
  long: number;
  city: string;
}
const Getlocation = () => {
  const map = useMap();
  console.log("map center", map.getCenter());
  return null;
};

const Map: React.FC<Props> = ({ lat, long, city }) => {
  return (
    <MapContainer
      center={[!lat ? 51.50853 : lat, !long ? -0.12574 : long]}
      zoom={12}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[!lat ? 51.50853 : lat, !long ? -0.12574 : long]}>
        <Popup position={[!lat ? 51.50853 : lat, !long ? -0.12574 : long]}>
          {" "}
          {city}
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
