export const Filter = () => {
	return (
		<div style={{width: "40px"}}>
			<svg viewBox={`0 0 40 40`}>
				<g>
					<line
						x1={10}
						y1={15}
						x2={30}
						y2={15}
						stroke={"rgba(126, 126, 132, 1)"}
					/>
					<circle
						cx={15}
						cy={15}
						r={1.5}
						fill={"rgba(255, 255, 255, 1)"}
						stroke={"rgba(126, 126, 132, 1)"}
					/>
					<line
						x1={10}
						y1={20}
						x2={30}
						y2={20}
						stroke={"rgba(126, 126, 132, 1)"}
					/>
					<circle
						cx={25}
						cy={20}
						r={1.5}
						fill={"rgba(255, 255, 255, 1)"}
						stroke={"rgba(126, 126, 132, 1)"}
					/>
					<line
						x1={10}
						y1={25}
						x2={30}
						y2={25}
						stroke={"rgba(126, 126, 132, 1)"}
					/>
					<circle
						cx={15}
						cy={25}
						r={1.5}
						fill={"rgba(255, 255, 255, 1)"}
						stroke={"rgba(126, 126, 132, 1)"}
					/>
				</g>
			</svg>
		</div>
	)
}

Filter.displayName="Filter";