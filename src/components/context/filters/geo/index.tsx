// React imports
import { useState, useEffect, useContext, createContext } from 'react';

// App imports
import * as Locations from './locations';

const GeoContext: React.Context<any> = createContext(null)

export const useGeo = () => {
	return (
		useContext(GeoContext)
	)
}

export const GeoProvider = ({children}: any) => {
	const [ cityName, setCityName ] = useState("asuncion");
	const [ viewport, setViewport ] = useState(Locations.asuncion);
	const [ placeCoordinates, setPlaceCoordinates ] = useState<any>(null);
	const [ placeId, setPlaceId ] = useState<any>(null);

	useEffect(() => {
		setViewport({...viewport, ...placeCoordinates});
	}, [ placeCoordinates ])

	return (
		<GeoContext.Provider value={{
			cityName, setCityName, 
			placeCoordinates, setPlaceCoordinates,
			viewport, setViewport,
			Locations,
			placeId, setPlaceId
		}}>
			{children}
		</GeoContext.Provider>
	)
}

GeoContext.displayName = "GeoContext";