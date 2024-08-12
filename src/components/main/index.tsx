// App imports
import { MapContainer } from './maps';
import { Sidebar } from './sidebar';
import { Search } from './search';
import './styles.scss';

export const Main = () => {
	let vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--vh', `${vh}px`);

	window.addEventListener('resize', () => {
	  let vh = window.innerHeight * 0.01;
	  document.documentElement.style.setProperty('--vh', `${vh}px`);
	});

	return (
		<div className="wrapper">
			<div className="header">
				<img src={process.env.PUBLIC_URL + "/static/logos/idesa.svg"} alt="logo-idesa" height="40px"/>
			</div>
			<Search/>
			<div className="main-wrapper">
				<Sidebar/>
				<MapContainer/>
			</div>
		</div>
	)
}

Main.displayName="Main";