import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const TMMapInstance = () => {
  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={13}
      style={{
        height: "calc(100vh - 32px)",
        width: "100%",
        borderRadius: "8px",
      }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
    </MapContainer>
  );
};

export default TMMapInstance;
