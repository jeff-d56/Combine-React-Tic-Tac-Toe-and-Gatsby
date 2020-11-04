import React from "react";


export const DisplayMoves = (props) => {
	return(
		<ol className="moves">{props.name}</ol>
	);	
};

export default DisplayMoves;