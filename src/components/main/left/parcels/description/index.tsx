// App imports
import './styles.scss';

// Third-party imports
import * as d3 from 'd3';

const siFormat = d3.format(",");

export const Description = ({ item, setCurrentId, setRejectedIds }: any) => {
	const onMouseOver = (e: any, item: any) => {
		setCurrentId(item.id);
	}

	return (
		<div 
			className="parcels-wrapper"
			onMouseOver={(e: any) => onMouseOver(e, item)}
			onMouseOut={() => setCurrentId(null)}
		>
			<div style={{display: "flex", justifyContent: "space-between"}}>
				<div style={{display: "grid"}}>
					<div>
						{item.disponibles} lotes disponibles
					</div>
					<div className="description-title">
						{item.nombre}
					</div>
				</div>
				<div style={{textAlign: "center"}}>
					<div>desde</div>
					<div className="current-value">{item.desde}</div>
				</div>
			</div>
			<div>{item.id}</div>
		</div>
	)
}

Description.displayName="Description";