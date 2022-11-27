import {
  GoogleMap,
  LoadScriptNext,
  MarkerF,
  Circle,
} from "@react-google-maps/api";
import { useState, useEffect, useMemo } from "react";
import styled from "styled-components";
import useGeoLocation from "hooks/useGeolocation";

function MapComponent() {
  const location = useGeoLocation();
  const options = {
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
    clickable: false,
    draggable: false,
    editable: false,
    visible: true,
    radius: 1000,
    zIndex: 1,
  };
  console.log("location", location.coordinates);
  //   const [coordinates, setCoordinates] = useState(props.coordinates);
  //   console.log(coordinates);
  //   const center = useMemo(() => coordinates, []);
  const [center, setCenter] = useState(location.coordinates);
  //   const center = useMemo(() => location.coordinates, []);
  useEffect(() => {
    console.log("start");
    setCenter(location.coordinates);
  }, [location]);
  return (
    <Wrapper>
      <LoadScriptNext
        googleMapsApiKey={`${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}`}
      >
        <GoogleMap
          zoom={14}
          center={center}
          mapContainerClassName="map-container"
        >
          <Circle
            // required
            center={center}
            // required
            options={options}
          />
          <MarkerF
            position={center}
            // icon={{ url: "/images/icons/map_marker.svg", scale: 5 }}
          />
        </GoogleMap>
      </LoadScriptNext>
    </Wrapper>
  );
}
export default MapComponent;

const Wrapper = styled.div`
  width: 100%;
  .map-container {
    width: 100%;
    height: 80vh;
  }
`;
