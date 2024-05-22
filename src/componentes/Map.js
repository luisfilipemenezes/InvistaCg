import React from 'react'
import { GoogleMap, useJsApiLoader,MarkerF } from '@react-google-maps/api';

const containerStyle = {
  width: '70%',
  height: '400px'
};


const center = {
  lat: -7.2381984994499895,
  lng: -35.90541208389839
};

function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyDCCSOq5TYFqp3koxiXB3y_IRI4j5UnFr4"
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={{
            streetViewControl:false,
            mapTypeControl:false,

        }}
      >
      <MarkerF position={center}></MarkerF>
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
  ) : <></>
}

export default React.memo(MyComponent)