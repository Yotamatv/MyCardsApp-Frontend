import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useMemo } from "react";
import React from "react";
import Spinner from "./Spinner";

export default function Maps() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyAbhMil3ncODHJLmylsC9yu315sxtFdz4U",
  });

  if (!isLoaded)
    return (
      <div>
        <Spinner />
      </div>
    );
  return <Map location={{ lat: 32.073547, lng: 34.781614 }} />;
}

function Map({ location }) {
  const center = useMemo(() => location, []);

  return (
    <GoogleMap
      zoom={10}
      center={center}
      mapContainerStyle={{
        width: "50vh",
        height: "50vh",
      }}
    >
      <Marker position={center} />
    </GoogleMap>
  );
}
