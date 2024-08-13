// App imports
import { Description } from './description';
import './styles.scss';

// Context imports
import { usePropertyApi } from '../../../context/api/property';

export const Anuncios = () => {
	const { currentId, setCurrentId, propertyData, setRejectedIds } = usePropertyApi();

	return (
		<div className="pictures">
			{propertyData.map((item: any, index: any) => {
				return (
					<div 
						key={index} 
						className="pictures-box"
						style={{
							border: currentId === item.id ? 
							"2px solid rgba(8, 18, 69, 1)" : 
							"2px solid rgba(0, 0, 0, 0)",
						}}
					>
						<Description item={item} setCurrentId={setCurrentId} setRejectedIds={setRejectedIds}/>
					</div>
				)}
			)}
		</div>
	)
}

Anuncios.displayName="Anuncios";