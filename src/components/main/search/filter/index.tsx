// React imports
import { useState } from 'react';

export const Filter = () => {
	const [ activeHover, setActiveHover ] = useState(false);

	const onMouseEnter = () => {
		setActiveHover(true)
	}
	const onMouseLeave = () => {
		setActiveHover(false)
	}
	const lineColor = activeHover ? "rgba(255, 255, 255, 1)" : "rgba(126, 126, 132, 1)";
	const circleColor = activeHover ? "rgba(126, 126, 132, 1)" : "rgba(255, 255, 255, 1)";

	return (
		<div className="filter-wrapper" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
			<div style={{width: "40px"}}>
				<svg viewBox={`0 0 40 40`}>
					<g>
						<line
							x1={10}
							y1={14}
							x2={30}
							y2={14}
							stroke={lineColor}
							strokeWidth="2"
						/>
						<circle
							cx={17}
							cy={14}
							r={2}
							fill={circleColor}
							stroke={lineColor}
							strokeWidth="2"
						/>
						<line
							x1={10}
							y1={20}
							x2={30}
							y2={20}
							stroke={lineColor}
							strokeWidth="2"
						/>
						<circle
							cx={24}
							cy={20}
							r={2}
							fill={circleColor}
							stroke={lineColor}
							strokeWidth="2"
						/>
						<line
							x1={10}
							y1={26}
							x2={30}
							y2={26}
							stroke={lineColor}
							strokeWidth="2"
						/>
						<circle
							cx={17}
							cy={26}
							r={2}
							fill={circleColor}
							stroke={lineColor}
							strokeWidth="2"
						/>
					</g>
				</svg>
			</div>
			<div>FILTRAR</div>
		</div>
	)
}

Filter.displayName="Filter";