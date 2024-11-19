// React imports
import { useRef, useEffect, useContext, createContext } from 'react';

// Context imports
import { useGeo } from '../filters/geo';

const GoogleMapsContext: React.Context<any> = createContext(null);

export const useGoogleMaps = () => {
  return (
    useContext(GoogleMapsContext)
  )
}

export const GoogleMapsProvider = ({children}: any) => {
  const { viewport, Locations, cityName } = useGeo();
  const mapRef = useRef<any>(null);

  useEffect(() => {
    const lng = viewport.longitude;
    const lat = viewport.latitude;
    const zoom = Locations[cityName].zoom;

    if (mapRef.current) {
      mapRef.current.panTo({ lat, lng });
      mapRef.current.setZoom(zoom);
    }
  }, [viewport]);
  
  return (
    <GoogleMapsContext.Provider value={{ mapRef }}>
      {children}
    </GoogleMapsContext.Provider>
  )
}

GoogleMapsContext.displayName="GoogleMapsContext";