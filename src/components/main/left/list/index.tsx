// App imports
import { Description } from './description';
import './styles.scss';

// Context imports
import { usePropertyApi } from '../../../context/api/property';

export const List = () => {
	const { currentId, setCurrentId, propertyData, setRejectedIds } = usePropertyApi();

	return (
		<div className="pictures">
			{propertyData.map((item: any, index: any) => {
				return (
					<div key={index} className="pictures-box">
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