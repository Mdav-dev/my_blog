import React, {useState, useEffect} from 'react'
import { FaAngleDown } from "react-icons/fa6";
import { VscTriangleDown } from "react-icons/vsc";
import './link2.css'



function Link2(props) {
	const [col, setCol] = useState(false);
	var check = props.test;
	const[mobile, setMobile] = useState(false);	
  
	useEffect(() => {
		function getScreenSize() {
		  return window.screen.width;
		}	 
		if (getScreenSize()< 500) {
		  setMobile(true);
		}   
	   }, []); 

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
	   function  handleClick(){
		if(props.sub1 && props.sub2){
			setCol(!col);
		}else{
			setCol(false)
		}
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
			paddingBottom: "22px"
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
		color: props.link_color,
		paddingBottom: "20px"
	}
	const custom3 = {
		position: "absolute",
		display:col?"":"none",
		left: "0",
		bottom: "-180%",
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
	<div onMouseOut={handleOut} 
		onMouseOver={handleHover}
		onClick={handleClick} 
		style={custom1} id={props.id}>

		<div style={custom1.b}>
			<a className='link' style={custom2} href={props.href}>{props.title}</a>
			<VscTriangleDown style={custom1.a} />
		</div>
		<div onMouseOut={handleOut} 
			onMouseOver={handleHover}
			style={custom3}>
			<div style={custom4}><a href={props.href1}>{props.sub1}</a></div>
			<div style={custom4}><a href={props.href2}>{props.sub2}</a></div>
			<div style={custom4}><a href={props.href3}>{props.sub3}</a></div>
			<div style={custom4}><a href={props.href4}>{props.sub4}</a></div>
			<div style={custom4}><a href={props.href5}>{props.sub5}</a></div>
		</div>
   	</div>
  )
}

export default Link2;
