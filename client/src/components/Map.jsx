import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";

require("dotenv").config();

mapboxgl.accessToken = process.env.MAPBOX_TOKEN;
function Map() {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/navigation-night-v1",
      center: [-122.4147, 37.7856],
      zoom: 12.5,
    });

    // Clean up on unmount
    return () => map.remove();
  }, []); // Empty dependency array means this effect runs once on mount and clean up on unmount

  return (
    <div ref={mapContainerRef} style={{ width: "700px", height: "700px" }}>
      <h1>alms</h1>
    </div>
  );
}

export default Map;
