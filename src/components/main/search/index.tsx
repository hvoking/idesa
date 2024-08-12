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
import { useGoogleSearchApi } from '../../context/api/google/search';

export const Search = () => {
	const { setPlaceId } = useGeo();
	const { googleSearchData, searchText, setSearchText } = useGoogleSearchApi();

	const [ suggestionIndex, setSuggestionIndex ] = useState(0);
	const [ suggestionsActive, setSuggestionsActive ]= useState(false);
	
	const inputRef = useRef<any>(null);

	const suggestions = googleSearchData && googleSearchData.predictions.reduce((total: any, item: any) => {
		const placeName = item.description.toLowerCase()
		total.push(placeName)
		return total
	}, []);

	const handleChange = (e: any) => {
		const query = e.target.value;
		setSearchText(query);

		if (query.length > 0) {
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
			const currentSearchValue: any = suggestions && suggestions[suggestionIndex]
			getCurrentPrediction(currentSearchValue)
			currentSearchValue && setSearchText(currentSearchValue);
			setSuggestionIndex(0);
			setSuggestionsActive(false);
		}

		// scape
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

	const getCurrentPrediction = (currentSearchValue: any) => {
		googleSearchData && googleSearchData.predictions.filter((item: any) => {
			const placeName = item.description.toLowerCase().trim();
			console.log(currentSearchValue)
			if (placeName === currentSearchValue) {
				setPlaceId(item.place_id);
			}
		})
	}

	const handleClick = (e: any) => {
		const currentSearchValue = e.target.innerText.trim();
		getCurrentPrediction(currentSearchValue)
		setSearchText(currentSearchValue);
		setSuggestionsActive(false);
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
				<div 
					style={{
						display: "grid", 
						gridTemplateColumns: "min-content auto", 
						fontSize: "1.2em", 
						alignItems: "center", 
						textAlign: "center",
						color: "rgba(126, 126, 132, 1)"
					}}
				>
					<Filter/>
					<div>FILTRAR</div>
				</div>
			</div>
			<div></div>
		</div>
	)
}

Search.displayName="Search";