import React from 'react'
import { VscTriangleDown } from "react-icons/vsc";

function Link4(props) {
	var check = props.test;
	var hover = false;
	

	function handleHover(){
		hover = true;
	}
	function handleMouseOut(){
		hover = false;
	}

	const custom1 = {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		cursor: "pointer",
		a:{
			display: check?"":"none",
			color: "grey",
			height: "19px",
		},
	}
	const custom2 = {
		fontSize: "15px",
		fontFamily:"\"noto serif\", Georgia, Times, \"times new roman\",serif",
		color: hover?"grey":"white",
		textDecoration: "none",
	}
  return (
	<div className='link4' onMouseOver={handleHover()} onMouseOut={handleMouseOut()} style={custom1} id={props.id}>
		<a style={custom2} href={props.s}>{props.title}</a>
		<VscTriangleDown style={custom1.a} />
   	</div>
  )
}

export default Link4
