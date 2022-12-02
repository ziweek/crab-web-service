import {
  GoogleMap,
  LoadScriptNext,
  MarkerClusterer,
  // MarkerF,
  Marker,
  Circle,
} from "@react-google-maps/api";
import { useState, useEffect, useMemo } from "react";
import { useRecoilState } from "recoil";
import { mainPostState, currentRegion } from "components/states";
import styled from "styled-components";
import useGeoLocation from "hooks/useGeolocation";

function MapComponent(props: any) {
  const location: any = useGeoLocation();
  const [region, setRegion] = useRecoilState(currentRegion);

  const sendSetOpenModal = () => {
    props.getSetOpenModal(true);
  };
  const [mainPost, setMainPost] = useRecoilState(mainPostState);
  const [markerLocations, setMarkerLocations] = useState(props.region);
  // console.log("test", props.region, location);
  const mOptions = {
    // mapId: "56e14c25c7f74ba3",(DarkMode)
    mapId: "ecdb6cde0b3bda6",
    panControl: false,
    zoomControl: false,
    mapTypeControl: false,
    scaleControl: false,
    streetViewControl: false,
    overviewMapControl: false,
    fullscreenControl: false,
    gestureHandling: "greedy",
  };
  const cOptions = {
    strokeColor: "#E9967A",
    strokeOpacity: 1,
    strokeWeight: 1,
    fillColor: "#E9967A",
    fillOpacity: 0.3,
    clickable: false,
    draggable: false,
    editable: false,
    visible: true,
    radius: 1000,
  };
  // console.log("location", location);
  const [center, setCenter] = useState({ lat: 37.5867, lng: 126.9748 });
  // const [center, setCenter] = useState(location);
  useEffect(() => {
    if (
      !location.error &&
      !(location.coordinates.lat === 0 && location.coordinates.lng === 0)
    ) {
      setCenter(location.coordinates);
      setRegion(location.coordinates);
    }
  }, [location]);
  function createKey(location: any) {
    return location.lat + location.lng;
  }
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
          // ref={(map) =>
          //   map && map.panTo({ lat: 25.0112183, lng: 121.52067570000001 })
          // }
        >
          <Circle
            // required
            center={center}
            // required
            options={cOptions}
          />
          {location && (
            <MarkerClusterer>
              {(clusterer) =>
                markerLocations.map((location: any) => (
                  <Marker
                    key={createKey(location.region)}
                    position={location.region}
                    clusterer={clusterer}
                    onClick={() => {
                      setMainPost(location);
                      sendSetOpenModal();
                      // .panTo(center);
                      // this.map.panTo(center);
                    }}
                  />
                ))
              }
            </MarkerClusterer>
          )}

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
    height: 100vh;
  }
`;
