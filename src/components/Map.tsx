import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";

interface Props {
  lat: number;
  long: number;
}

const Map: React.FC<Props> = ({ lat, long }) => {
  return (
    <MapContainer center={[lat, long]} zoom={12} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[lat, long]}>
        <Popup>
          {" "}
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
