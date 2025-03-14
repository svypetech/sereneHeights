"use client";

import React from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 10.99835602,
  lng: 77.01502627,
};

function SimpleMap() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyDBaXzGlhT08HbNVAY3TgakhBS3DJMX-Bw",
  });

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={11}>
      <Marker position={center} />
    </GoogleMap>
  );
}

export default React.memo(SimpleMap);
