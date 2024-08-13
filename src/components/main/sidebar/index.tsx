// App imports
import { Fracciones } from './fracciones';
import './styles.scss';

export const Sidebar = () => {
	return (
		<div className="sidebar-wrapper">
			<Fracciones/>
		</div>
	)
}

Sidebar.displayName="Sidebar";