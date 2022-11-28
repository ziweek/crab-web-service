import {
  GoogleMap,
  LoadScriptNext,
  MarkerClusterer,
  // MarkerF,
  Marker,
  Circle,
} from "@react-google-maps/api";
import { useState, useEffect, useMemo } from "react";
import styled from "styled-components";
import useGeoLocation from "hooks/useGeolocation";

function MapComponent(props: object) {
  const location = useGeoLocation();
  const [mainPost, setMainPost] = useState();
  const [markerLocations, setMarkerLocations] = useState(props.region);
  console.log("test", props.region);
  const mOptions = {
    panControl: false,
    zoomControl: false,
    mapTypeControl: false,
    scaleControl: false,
    streetViewControl: false,
    overviewMapControl: false,
    fullscreenControl: false,
  };
  const cOptions = {
    strokeColor: "#FF0000",
    strokeOpacity: 0.3,
    strokeWeight: 1,
    fillColor: "#FF0000",
    fillOpacity: 0.2,
    clickable: false,
    draggable: false,
    editable: false,
    visible: true,
    radius: 1000,
  };
  console.log("location", location.coordinates);
  const [center, setCenter] = useState(location.coordinates);
  useEffect(() => {
    setCenter(location.coordinates);
  }, [location]);
  function createKey(location) {
    return location.lat + location.lng;
  }
  useEffect(() => {
    console.log("useEffect", mainPost);
  }, [mainPost]);
  return (
    <Wrapper>
      <LoadScriptNext
        googleMapsApiKey={`${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}`}
      >
        <GoogleMap
          zoom={14}
          center={center}
          clickableIcons={false}
          options={mOptions}
          mapContainerClassName="map-container"
        >
          <Circle
            // required
            center={center}
            // required
            options={cOptions}
          />
          <MarkerClusterer>
            {(clusterer) =>
              markerLocations.map((location) => (
                <Marker
                  key={createKey(location.region)}
                  position={location.region}
                  clusterer={clusterer}
                  onClick={() => {
                    setMainPost(location.region);
                    // console.log(mainPost);
                  }}
                />
              ))
            }
          </MarkerClusterer>
          <Marker
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
