import React from "react";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";

const Map: React.FC = () => {
  // load script for google map
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
  });

  if (!isLoaded) return <div>Loading....</div>;

  // static lat and lng
  const center = { lat: "YOUR_LATITUDE", lng: "YOUR_LONGITUDE" }; // Replace with your actual coordinates

  return (
   <></>
  );
};

export default Map;
