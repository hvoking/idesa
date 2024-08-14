// App imports
import './styles.scss';

export const Header = ({ propertyData }: any) => {
	const lotesDisponibles = propertyData.reduce((total: any, item: any) => {
		total += item.disponibles;
		return total
	}, 0)

	return (
		<div className="left-header">
			<div className="left-results">{propertyData.length} resultados</div>
			<div className="left-header-bottom">
				<div className="left-title">Fracciones</div>
				<div className="left-lotes-disponibles">
					{lotesDisponibles} lotes <br/>
					disponibles
				</div>
			</div>
		</div>
	)
}

Header.displayName="Header";