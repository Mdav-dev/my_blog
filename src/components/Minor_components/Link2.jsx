import React, {useState} from 'react'
import { FaAngleDown } from "react-icons/fa6";
import { VscTriangleDown } from "react-icons/vsc";



function Link2(props) {
	const [col, setCol] = useState(false);
	var check = props.test;

	function handleHover(){
		if(props.sub1 && props.sub2){
			setCol(true);
		}else{
			setCol(false)
		}		
	   }
	   function handleOut(){
		setCol(false)
	   }

	const custom1 = {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		cursor: "pointer",
		position: "relative",
		a:{
			display: check?"":"none",
			color: "grey",
			height: "19px",
		},
		b:{
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			cursor: "pointer",
		}
	}
	const custom2 = {
		fontSize: "19px",
		fontFamily:"\"noto serif\", Georgia, Times, \"times new roman\",serif",
		textDecoration: "none",
		color: props.link_color
	}
	const custom3 = {
		position: "absolute",
		display:col?"":"none",
		left: "0",
		bottom: "-500%",
		zIndex: "99",				
		paddingBottom: "",
	}
	const custom4 = {
		width: "180px",
		paddingTop: "10px",
		fontSize: "15px",
		background: "#fff",
	}
  return (
	<div onMouseOut={handleOut} onMouseOver={handleHover} style={custom1} id={props.id}>
		<div style={custom1.b}>
			<a style={custom2} href={props.title}>{props.title}</a>
			<VscTriangleDown style={custom1.a} />
		</div>
		<div style={custom3}>
			<div style={custom4}>{props.sub1}</div>
			<div style={custom4}>{props.sub2}</div>
			<div style={custom4}>{props.sub3}</div>
			<div style={custom4}>{props.sub4}</div>
			<div style={custom4}>{props.sub5}</div>
		</div>
   	</div>
  )
}

export default Link2;
