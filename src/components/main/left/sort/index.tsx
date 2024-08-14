// React imports
import { useState } from 'react';

// App imports
import { Arrow } from './arrow';
import { Suggestions } from './suggestions';
import './styles.scss';

// Context imports
import { usePropertyApi } from '../../../context/api/property';

export const Sort = () => {
	const [ suggestionsActive, setSuggestionsActive ] = useState(false);
	const { sortKey, setSortKey, setSortOrder } = usePropertyApi();

	const suggestions = [
		"Nombre",
		"Precio menor a mayor",
		"Precio mayor a menor",
		"Lotes disponibles menor a mayor",
		"Lotes disponibles mayor a menor"
	]

	const sortOptions: any = {
		"Nombre": "nombre",
		"Precio menor a mayor": "desde",
		"Precio mayor a menor": "desde",
		"Lotes disponibles menor a mayor": "disponibles",
		"Lotes disponibles mayor a menor": "disponibles"
	}


	const sortDirections: any = {
	  "Nombre": "asc",
	  "Precio menor a mayor": "desc",
	  "Precio mayor a menor": "asc",
	  "Lotes disponibles menor a mayor": "asc",
	  "Lotes disponibles mayor a menor": "desc"
	};

	const onClick = (e: any) => {
		const currentValue = e.target.innerText;	
		setSortKey(sortOptions[currentValue]);
		setSortOrder(sortDirections[currentValue]);
	}

	return (
			<div className="sort-wrapper">
				<div>Ordenar por:</div>
				<div 
					className="sort-dropdown" 
					onMouseEnter={() => setSuggestionsActive(true)}
					onMouseLeave={() => setSuggestionsActive(false)}
				>
					<div className="sort-title">
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