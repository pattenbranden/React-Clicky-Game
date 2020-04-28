import React from 'react';
import "./card.css"

const MemoryCard = props => {
	console.log(props)
	return (
	<div 
	className="allCards" 
	key={props.id}
	onClick={() => props.cardClick(props.id, props.clicked)}
	>
		<img 
		id={props.name}
		src={(props.image)}
		alt={props.name}
		/>
	</div>
)};
export default MemoryCard;