// Context imports
export const Description = ({ item }: any) => {
	return (
		<div 
			className="listing-content" 
			style={{backgroundColor: "rgba(255, 255, 255, 1)"}}
		>
			<div className="lotes-disponibles">{item.disponibles} lotes disponibles</div>
			<div className="listing-title">{item.nombre}</div>
		    <div 
		    	className="listing-price" 
		    	style={{color: "rgba(247, 129, 57, 1)", fontSize: "1.4em"}}
		    >
		    	desde {item.desde}
		    </div>
		</div>
	)
}

Description.displayName="Description";