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
			className="pictures-description-wrapper"
			onMouseOver={(e: any) => onMouseOver(e, item)}
			onMouseOut={() => setCurrentId(null)}
		>
			<div className="pictures-description">
				<div className="referencia">
					{item.id}
				</div>
				<div className="description-title">
					{item.nombre}
				</div>
			</div>
			<div className="values-wrapper">
				<div style={{textAlign: "center"}}>
					<div>desde</div>
					<div className="current-value">{item.desde}</div>
				</div>
			</div>
		</div>
	)
}

Description.displayName="Description";