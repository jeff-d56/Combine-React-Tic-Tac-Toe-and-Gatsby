import React from "react";
// displays next player: X or O as well as winner

export const DisplayNextPlayer = (props) => {
	return(
		<header>
			<h2 className="title">{props.name}</h2>
		</header>
		
	);	
};

export default DisplayNextPlayer;