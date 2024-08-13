// React imports
import { useState } from 'react';

// App imports
import { Arrow } from './arrow';
import { Suggestions } from './suggestions';

// Context imports
import { usePropertyApi } from '../../../context/api/property';

export const Sort = () => {
	const [ suggestionsActive, setSuggestionsActive ] = useState(false);
	const { sortKey, setSortKey } = usePropertyApi();

	const suggestions = [
		"Nombre",
		"Precio menor a mayor",
		"Precio mayor a menor",
		"Lotes disponibles menor a mayor",
		"Lotes disponibles mayor a menor"
	]

	const onClick = (e: any) => {
		const currentValue = e.target.innerText;	
		setSortKey(currentValue)
	}

	return (
			<div style={{
				display: "grid", 
				gridTemplateColumns: "min-content min-content", 
				fontSize: "0.8em", 
				padding: "10px", 
				paddingLeft: "0",
				whiteSpace: "nowrap",
				gridGap: "5px"
			}}>
					<div>Ordenar por:</div>
					<div 
						className="pdf-dropdown-wrapper" 
						onMouseEnter={() => setSuggestionsActive(true)}
						onMouseLeave={() => setSuggestionsActive(false)}
					>
						<div className="pdf-dropdown-header">
							<div>{sortKey}</div>
							<Arrow/>
						</div>
						{suggestionsActive && 
							<Suggestions 
								suggestions={suggestions} 
								onClick={onClick}
							/>
						}
					</div>
			</div>
	)
}

Sort.displayName="Sort";