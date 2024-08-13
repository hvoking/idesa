// App imports
import { Sort } from './sort';
import { Anuncios } from './anuncios'
import './styles.scss';

export const Left = () => {
	return (
		<div className="left">
			<div className="left-title">Fracciones</div>
			<Sort/>
			<Anuncios/>
		</div>
	)
}

Left.displayName="Left";