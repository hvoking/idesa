export const Bottom = ({ item }: any) => {
	return (
		<div style={{display: "flex", gap: "30px", paddingTop: "10px", paddingBottom: "10px"}}>
			<div style={{display: "flex", gap: "2px"}}>
				<img src={process.env.PUBLIC_URL + "/static/icons/marker.svg"} alt="marker" height="16px"/>
				<div>Fracción {item.id}</div>
			</div>
			<div style={{display: "flex", gap: "2px"}}>
				<img src={process.env.PUBLIC_URL + "/static/icons/marker.svg"} alt="marker" height="16px"/>
				<div>{item.lugar}</div>
			</div>
		</div>
	)
}

Bottom.displayName="Bottom";