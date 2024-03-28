import React, {useState, useEffect} from 'react'

function About_card(props) {
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

	}
	const custom2 = {
		fontSize: "20px",
		color: "2f557f",

	}
	const custom3 = {
		"fontFamily":"\"noto sans\", helvetica, arial, sans-serif",
	}
  return (
    <div style={custom1}>
	<h2 style={custom2}>{props.title}</h2>
	<p style={custom3}>{props.description}</p>
	 
    </div>
  )
}

export default About_card;