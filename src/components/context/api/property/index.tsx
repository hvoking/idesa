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
	const [ samplesIds, setSamplesIds ] = useState<any>([]);
	const [ rejectedIds, setRejectedIds ] = useState<any>([]);

	const [ sortKey, setSortKey ] = useState("nombre");
	const [ sortOrder, setSortOrder ] = useState("asc");

	return (
		<PropertyApiContext.Provider value={{ 
			propertyData, 
			currentId, setCurrentId,
			samplesIds, setSamplesIds,
			rejectedIds, setRejectedIds,
			sortKey, setSortKey,
			sortOrder, setSortOrder,
		}}>
			{children}
		</PropertyApiContext.Provider>
	)
}

PropertyApiContext.displayName = "PropertyApiContext";