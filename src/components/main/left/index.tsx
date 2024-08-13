// App imports
import { Sort } from './sort';
import { Parcels } from './parcels'
import './styles.scss';

export const Left = () => {
	return (
		<div className="left">
			<div className="left-title">Fracciones</div>
			<Sort/>
			<Parcels/>
		</div>
	)
}

Left.displayName="Left";