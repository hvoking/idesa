// App imports
import { Description } from './description';
import './styles.scss';

// Context imports
import { usePropertyApi } from '../../../context/api/property';

export const List = () => {
	const { currentId, setCurrentId, propertyData, setRejectedIds, sortKey, sortOrder } = usePropertyApi();

	const sortData = propertyData.sort((a: any, b: any) => {
	  let comparison = 0;

	  // Numerical comparison
	  if (typeof a[sortKey] === 'number' && typeof b[sortKey] === 'number') {
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