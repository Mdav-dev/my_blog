import React from 'react'
import { FaAngleDown } from "react-icons/fa6";
import { VscTriangleDown } from "react-icons/vsc";



function Link2(props) {
	var check = props.test;

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
		fontSize: "19px",
		fontFamily:"\"noto serif\", Georgia, Times, \"times new roman\",serif",
		textDecoration: "none",
		color: props.link_color
	}
  return (
	<div style={custom1} id={props.id}>
		<a style={custom2} href={props.title}>{props.title}</a>
		<VscTriangleDown style={custom1.a} />
   	</div>
  )
}

export default Link2;
