import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Leaflet from "leaflet";

Leaflet.Icon.Default.imagePath = "../node_modules/leaflet";
//@ts-ignore
delete Leaflet.Icon.Default.prototype._getIconUrl;

Leaflet.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

interface Props {
  lat: number;
  long: number;
  city: string;
}

const DisplayMapComponent: React.FC<Props> = ({ lat, long, city }) => {
  const map = useMap();
  map.setView([lat as number, long as number]);
  console.log(city);
  return null;
};
const Map: React.FC<Props> = ({ lat, long, city }) => {
  return (
    <>
      <MapContainer center={[lat, long]} zoom={12} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <DisplayMapComponent lat={lat} long={long} city={city} />

        <Marker position={[lat, long]}>
          <Popup position={[lat, long]}> {city}</Popup>
        </Marker>
      </MapContainer>
    </>
  );
};

export default Map;
