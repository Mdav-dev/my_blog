import React, {useState, useEffect} from 'react'

function Activity_card(props) {
	const[mobile, setMobile] = useState(false);	  
	useEffect(() => {
		function getScreenSize() {
		  return window.screen.width;
		}	 
		if (getScreenSize()< 500) {
		  setMobile(true);
		}   
	   }, []); 

	var color = "#2f557f";
	var color1 = "#fff";
	

	const custom1 = {
		display: "grid",
		gridTemplateColumns: "1fr 3fr",
		gridTemplateRows: "1fr 2fr",
		borderRadius: "10%",
		marginTop: "15px",
		width: mobile? "":"500px",
		
		

	}
	const common = {
		backgroundColor: color,
		color: color1,
		padding: "10px",
		textAlign: "center",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	}
	const custom2 = {
		gridColumn: "1/2",
		gridRow: "1/2",
		...common,

	}
	const custom3 = {
		gridColumn: "2/3",
		gridRow: "1/2",
		fontFamily: "\"IBM Plex Sans\", sans-serif",
		fontWeight: "500",
		fontStyle: "normal",
		fontSize: "15px",
		alignItems: "flex-end",		
		...common,

	}
	const custom4 = {
		gridColumn: "1/2",
		gridRow: "2/3",
		fontFamily: "\"IBM Plex Sans\", sans-serif",
		fontWeight: "500",
		fontStyle: "normal",
		fontSize: "20",
		alignItems: "flex-start",
		...common,

	}
	const custom5 = {
		gridColumn: "2/3",
		gridRow: "2/3",
		// fontFamily: "\"IBM Plex Sans\", sans-serif",
		"fontFamily":"\"Newsreader\", serif",
		"fontOpticalSizing":"auto",
		"fontWeight":"300",
		"fontStyle":"normal",
		fontSize: mobile? "18px":"25px",
		...common,

	}
  return (
    <div style={custom1}>
		<div style={custom2}>
		{props.startD}
		
		</div>
		<div style={custom3}>
		{props.description}

		</div>
		<div style={custom4}>
		{props.endD}

		</div>
		<div style={custom5}>
			{props.sabbath}
		</div>	 
    </div>
  )
}

export default Activity_card
