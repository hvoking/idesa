// React imports
import { useState, useContext, createContext } from 'react';

// App imports
import { propertyData } from './dict';

const PropertyApiContext: React.Context<any> = createContext(null)

export const usePropertyApi = () => {
	return (
		useContext(PropertyApiContext)
	)
}

export const PropertyApiProvider = ({children}: any) => {
	const [ currentId, setCurrentId ] = useState<any>(null);

	return (
		<PropertyApiContext.Provider value={{ propertyData, currentId, setCurrentId }}>
			{children}
		</PropertyApiContext.Provider>
	)
}

PropertyApiContext.displayName = "PropertyApiContext";