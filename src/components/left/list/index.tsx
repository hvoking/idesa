// App imports
import { Description } from './description';
import './styles.scss';

// Context imports
import { usePropertyApi } from 'context/api/property';

export const List = () => {
	const { setCurrentId, propertyData, setRejectedIds, sortKey, sortOrder } = usePropertyApi();

	const extractNumber = (value: string): number => {
	  // Remove non-numeric characters and convert to number
	  return parseFloat(value.replace(/[^\d.]/g, '').replace(/\./g, ''));
	};

	const sortData = propertyData.sort((a: any, b: any) => {
	  let comparison = 0;

	  // Extract numbers if the sortKey is 'desde'
	  if (sortKey === 'desde') {
	    const aValue = extractNumber(a[sortKey]);
	    const bValue = extractNumber(b[sortKey]);
	    comparison = aValue - bValue;
	  }
	  // Numerical comparison
	  else if (typeof a[sortKey] === 'number' && typeof b[sortKey] === 'number') {
	    comparison = a[sortKey] - b[sortKey];
	  }
	  // Alphabetical comparison
	  else if (typeof a[sortKey] === 'string' && typeof b[sortKey] === 'string') {
	    comparison = a[sortKey].localeCompare(b[sortKey]);
	  }

	  // Reverse the comparison if sortOrder is 'desc'
	  return sortOrder === 'desc' ? -comparison : comparison;
	});


	return (
		<div className="list-wrapper">
			{sortData.map((item: any, index: any) => {
				return (
					<div key={index} className="list-item">
						<Description 
							item={item} 
							setCurrentId={setCurrentId} 
							setRejectedIds={setRejectedIds}
						/>
					</div>
				)}
			)}
		</div>
	)
}

List.displayName="List";