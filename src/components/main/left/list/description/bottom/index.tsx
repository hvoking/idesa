// App imports
import './styles.scss';

export const Bottom = ({ item }: any) => {
	return (
		<div className="description-bottom-wrapper">
			<div className="description-bottom-item">
				<img src={process.env.PUBLIC_URL + "/static/icons/marker.svg"} alt="marker" height="16px"/>
				<div>Fracción {item.id}</div>
			</div>
			<div className="description-bottom-item">
				<img src={process.env.PUBLIC_URL + "/static/icons/marker.svg"} alt="marker" height="16px"/>
				<div>{item.lugar}</div>
			</div>
		</div>
	)
}

Bottom.displayName="Bottom";