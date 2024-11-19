// App imports
import { CustomMarker } from './marker';
import { CustomPopup } from './popup';
import './styles.scss';

// Context imports
import { useGoogleMaps } from 'context/maps';
import { useGeo } from 'context/filters/geo';
import { usePropertyApi } from 'context/api/property';
import { useTooltip } from 'context/tooltip';

// Third-party imports
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

export const MapContainer = () => {
  const { mapRef } = useGoogleMaps();
  const { viewport } = useGeo();
  const { propertyData, currentId, setCurrentId } = usePropertyApi();
  const { propertyInfo, setPropertyInfo } = useTooltip();

  const googleMapsApiKey: any = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: googleMapsApiKey,
  });

  const mapContainerStyle = {
    width: '100%',
    height: '100%',
  };

  const center = {
    lat: viewport.latitude,
    lng: viewport.longitude,
  };

  return isLoaded ? (
    <div className="map-wrapper">
      <GoogleMap
        onLoad={(map: any) => (mapRef.current = map)}
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={viewport.zoom}
      >
       <CustomMarker 
        	propertyData={propertyData}
        	currentId={currentId}
        	setCurrentId={setCurrentId}
        	setPropertyInfo={setPropertyInfo}
        />
       {propertyInfo && 
        	<CustomPopup 
        		marker={propertyInfo} 
        		setPropertyInfo={setPropertyInfo}
        	/>
        }
      </GoogleMap>
    </div>
  ) : (
    <div>Loading...</div>
  );
};

MapContainer.displayName = 'MapContainer';