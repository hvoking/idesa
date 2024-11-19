// React imports
import { useState, useRef } from 'react';

// App imports
import { Suggestions } from './suggestions';
import { SearchIcon } from './icon';
import { Cross } from './cross';
import { Filter } from './filter';
import './styles.scss';

// Context imports
import { useGeo } from '../../context/filters/geo';

export const Search = () => {
	const { setCityName, Locations, cities, setPlaceCoordinates } = useGeo();

	const [ searchText, setSearchText ] = useState<any>("");
	const [ suggestions, setSuggestions ] = useState<any>([]);

	const [ suggestionIndex, setSuggestionIndex ] = useState(0);
	const [ suggestionsActive, setSuggestionsActive ]= useState(false);
	
	const inputRef = useRef<any>(null);

	const citiesNames = Object.keys(cities);

	const onFocus = () => {
		setSuggestions(citiesNames);
		setSuggestionsActive(true);
	}

	const handleChange = (e: any) => {
		const query = e.target.value.toLowerCase();
		setSearchText(query);
		if (query.length > 0) {
			const filterSuggestions: any = citiesNames.filter((suggestion: any) => 
				{
					const currentSuggestion = suggestion.toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "");
					return currentSuggestion.indexOf(query) > -1
				}
			)
			setSuggestions(filterSuggestions);
			setSuggestionsActive(true);
		}
		else {
			setSuggestionsActive(false)
		}
	};

	const handleKeyDown = (e: any) => {
		// up arrow
		if (e.keyCode === 38) {
			if (suggestionIndex === 0) {
				return;
			}
			setSuggestionIndex(suggestionIndex - 1);
		}
		// down arrow
		else if (e.keyCode === 40) {
			if (suggestionIndex - 1 === suggestions.length) {
				return
			}
			setSuggestionIndex(suggestionIndex + 1);
		}
		// enter
		else if (e.keyCode === 13) {
			const cityValue: string = suggestions[suggestionIndex]
			setSearchText(cityValue);
			setSuggestionIndex(0);
			setSuggestionsActive(false);

			const cityName = cities[cityValue];
			setCityName(cityName);
			
			const selectedCity: any = Locations[cityName];
			setPlaceCoordinates({ 
				longitude: selectedCity.longitude, 
				latitude: selectedCity.latitude 
			});
		}
		// escape
		else if (e.keyCode === 27) {
			setSearchText("");
			setSuggestionIndex(0);
			setSuggestionsActive(false);
		}
	};

	const cleanSuggestions = () => {
		setSearchText("");
		setSuggestionIndex(0);
		setSuggestionsActive(false);
	}

	const handleClick = (e: any, suggestion: any) => {
		setSuggestions([]);
		setSearchText(suggestion)
		
		setSuggestionsActive(false)

		const cityName = cities[suggestion];
		const selectedCity: any = Locations[cityName];

		setCityName(cityName);
		setPlaceCoordinates({ 
			longitude: selectedCity.longitude, 
			latitude: selectedCity.latitude 
		});
	};

	return (
		<div className="search">
			<div></div>
			<div className="search-wrapper">
				<div className="idesa-search">
					<SearchIcon/>
					<input 
						ref={inputRef}
						className="maps-input"
						type="text" 
						placeholder="Buscar zona Ej.: Altos, Minga, etc"
						value={searchText}
						onChange={handleChange}
						onKeyDown={handleKeyDown}
						spellCheck={false}
						onFocus={onFocus}
					/>
					<Cross cleanSuggestions={cleanSuggestions}/>
					{suggestionsActive && suggestions &&
						<Suggestions 
							suggestions={suggestions}
							handleClick={handleClick}
						/>
					}
				</div>
				<div className="search-cta">
					BUSCAR
				</div>
				<Filter/>
			</div>
			<div></div>
		</div>
	)
}

Search.displayName="Search";