// App imports
import { Description } from './description';
import './styles.scss';

// Context imports
import { usePropertyApi } from '../../../context/api/property';

export const Fracciones = () => {
	const { setCurrentId, propertyData } = usePropertyApi();

	const onMouseOver = (e: any, item: any) => {
		setCurrentId(item.id);
	}
	return (
		<div>
			{propertyData?.map((item: any, index: any) => {
				return (
					<div 
						key={index} 
						className="airbnb-description-wrapper" 
						onMouseOver={(e: any) => onMouseOver(e, item)}
					>
						<Description item={item}/>
					</div>
				)}
			)}
		</div>
	)
}

Fracciones.displayName="Fracciones";