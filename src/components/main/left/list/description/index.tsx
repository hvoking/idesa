// App imports
import { Top } from './top';
import { Bottom } from './bottom';
import './styles.scss';

// Third-party imports
import * as d3 from 'd3';

const siFormat = d3.format(",");

export const Description = ({ item, setCurrentId, setRejectedIds }: any) => {
	const onClick = (e: any, item: any) => {
		setCurrentId(item.id);
	}

	return (
		<div 
			className="parcels-wrapper"
			onClick={(e: any) => onClick(e, item)}
		>
			<Top item={item}/>
			<Bottom item={item}/>
		</div>
	)
}

Description.displayName="Description";