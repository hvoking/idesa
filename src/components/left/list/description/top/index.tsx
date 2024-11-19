// App imports
import './styles.scss';

export const Top = ({ item }: any) => {
	return (
		<div className="description-top">
			<div className="description-available">
				{item.disponibles} lotes disponibles
			</div>
			<div className="description-text">
				<div className="description-title">
					{item.nombre.toUpperCase()}
				</div>
				<div style={{textAlign: "center"}}>
					<div 
						style={{
							display: "grid", 
							justifyItems: "end", 
							color: "rgba(126, 126, 132, 1)"
						}}
					>
						Desde
					</div>
					<div className="current-value">
						{item.desde}
					</div>
				</div>
			</div>
		</div>
	)
}

Top.displayName="Top";