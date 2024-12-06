import React from "react";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import { ZoomControl, GeolocationControl, SearchControl } from "@pbe/react-yandex-maps";


const MapComponent = () => {
  return(
    <YMaps>
        <Map
        defaultState={{ center: [55.779846, 37.632508], zoom: 17 }}
          width="100%"
          height="100%"
        modules={['control.ZoomControl', 'control.GeolocationControl', 'control.SearchControl']}
        >
          <ZoomControl />
        <Placemark geometry={[55.779846, 37.632508]} />
        </Map>
      
    </YMaps>
  )
}

export default MapComponent