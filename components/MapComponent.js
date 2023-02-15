import ReactMapGL from "react-map-gl";
import { useState } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

import("mapbox-gl");
function MapComponent() {
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 11,
  });

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/nelou/cle4ds0pq007q01qmcqdpsm66"
      mapboxApiAcessToken={process.env.NEXT_PUBLIC_MAPBOX_KEY}
      {...viewport}
      mapLib={maplibregl}
    />
  );
}
export default MapComponent;
