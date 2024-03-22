import React, { useState, useEffect } from 'react'
import { FaCaretRight } from "react-icons/fa";
import { VscTriangleDown } from "react-icons/vsc";

function Link3(props) {
	const[mobile, setMobile] = useState(false);	
  
	useEffect(() => {
		function getScreenSize() {
		  return window.screen.width;
		}	 
		if (getScreenSize()< 500) {
		  setMobile(true);
		}   
	   }, []); 

	const custom1 = {
		cursor: "pointer",
		display: "flex",
		justifyContent: "space-between",
		alignItems: "flex-end",
		gap: "20px",
	 
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
		  {mobile?<VscTriangleDown style={custom3}/> :<FaCaretRight style={custom3}/>}
		</div>
	   )
	 }

export default Link3
