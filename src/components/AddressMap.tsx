import { FC } from "react";
import Map, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useAppSelector } from "../hooks/useAppDispatch";

const AddressMap: FC = () => {
  const { product } = useAppSelector((state) => state.product);

  const { company } = product;
  const latitude = Number(company?.address.latitude);
  const longitude = Number(company?.address.longitude);

  return (
    <Map
      mapboxAccessToken={import.meta.env.VITE_MAPBOX_API_KEY}
      initialViewState={{
        longitude: longitude,
        latitude: latitude,
        zoom: 10,
      }}
      style={{ width: "100%", height: "200px" }}
      mapStyle="mapbox://styles/mapbox/streets-v12"
    >
      <Marker longitude={longitude} latitude={latitude} />
    </Map>
  );
};

export default AddressMap;
