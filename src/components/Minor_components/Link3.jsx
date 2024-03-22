import React from 'react'
import { FaCaretRight } from "react-icons/fa";

function Link3(props) {
	const custom1 = {
		cursor: "pointer",
		display: "flex",
		justifyContent: "space-between",
		alignItems: "flex-end"
	 
	   }
	   const custom2 = {
		fontFamily:"\"noto serif\", Georgia, Times, \"times new roman\",serif",
		color: props.link_color,
		fontSize: "18px",
		fontWeight: "400",
		textDecoration: "none",
	   }
	   const custom3 = {
		height: "14px"
	   }
	   return (
		<div style={custom1} id={props.id}>
		  <a style={custom2} href={props.title}>{props.title}</a> 
		  <FaCaretRight style={custom3}/>
		</div>
	   )
	 }

export default Link3
