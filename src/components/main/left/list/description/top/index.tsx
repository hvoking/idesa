export const Top = ({ item }: any) => {
	return (
		<div style={{borderBottom: "2px solid rgba(126, 126, 132, 0.2)", paddingBottom: "16px"}}>
			<div className="disponibles-wrapper">
				{item.disponibles} lotes disponibles
			</div>
			<div  style={{display: "flex", justifyContent: "space-between", alignItems: "end"}}>
				<div className="description-title">
					{item.nombre}
				</div>
				<div style={{textAlign: "center"}}>
					<div>Desde</div>
					<div className="current-value">{item.desde}</div>
				</div>
			</div>
		</div>
	)
}

Top.displayName="Top";