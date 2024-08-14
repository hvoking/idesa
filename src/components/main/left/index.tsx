// App imports
import { Header } from './header';
import { Sort } from './sort';
import { List } from './list'
import './styles.scss';

// Context imports
import { usePropertyApi } from '../../context/api/property';

export const Left = () => {
	const { propertyData } = usePropertyApi();
	return (
		<div className="left">
			<Header propertyData={propertyData}/>
			<Sort/>
			<List/>
		</div>
	)
}

Left.displayName="Left";