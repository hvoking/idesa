// App imports
import './styles.scss';

export const Header = ({ propertyData }: any) => {
	const lotesDisponibles = propertyData.reduce((total: any, item: any) => {
		total += item.disponibles;
		return total
	}, 0)

	return (
		<div className="left-header">
			<div className="left-results">
				{propertyData.length} nuevos
			</div>
			<div className="left-header-bottom">
				<div className="left-title">
					Desarrollos Inmobiliarios
				</div>
				<div className="left-lotes-disponibles">
					{lotesDisponibles} inmuebles <br/>
					disponibles
				</div>
			</div>
		</div>
	)
}

Header.displayName="Header";