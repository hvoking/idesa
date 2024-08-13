// React imports
import { useCallback } from 'react';

// App imports
import { CustomMarker } from './marker';
import './styles.scss';

// Context imports
import { useMapbox } from '../../context/mapbox';
import { useGeo } from '../../context/filters/geo';
import { usePropertyApi } from '../../context/api/property';
import { useTooltip } from '../../context/tooltip';

// Third-party imports
import { Map } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

export const MapContainer = () => {
	const { mapRef, currentBasemap } = useMapbox();
	const { viewport, setPlaceCoordinates } = useGeo();
	const { propertyData, currentId, setCurrentId } = usePropertyApi();
	const { propertyInfo, setPropertyInfo } = useTooltip();

	const onDblClick = useCallback((e: any) => {
		const lng = e.lngLat.lng;
		const lat = e.lngLat.lat;
		const coordinates = { longitude: lng, latitude: lat };
		setPlaceCoordinates(coordinates);
	}, []);

	return (
		<div className="map-wrapper">
			<Map
				ref={mapRef}
				initialViewState={viewport}
				mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN} 
				mapStyle={currentBasemap}
				onDblClick={onDblClick}
				doubleClickZoom={false}
				antialias={true}
				preserveDrawingBuffer={true}
			>
				<CustomMarker 
					propertyData={propertyData}
					propertyInfo={propertyInfo}
					currentId={currentId}
					setCurrentId={setCurrentId}
					setPropertyInfo={setPropertyInfo}
				/>
			</Map>
		</div>
	)
}

MapContainer.displayName="MapContainer";