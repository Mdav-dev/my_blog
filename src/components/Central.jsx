import React, {useState, useEffect} from 'react'
import Activity_card from './Minor_components/Activity_card';

function Central() {

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
		display: "flex",
		flexDirection: "column",
		width: "86%",
		

	}
	const custom2 = {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		
	}
	const custom3 = {
		position: "relative",
		width: "100%",
		paddingBottom:mobile?"15%":"15%",
		overflow: "hidden",
		height: "40vh",
	}
	const auto_images = {
		position: "absolute",
		top: "0",
		left: "0",
		width: "100%",
		height: "100%",
		objectFit: "cover",
	}
	const note = {
		display: "flex",
		fontFamily: "noto serif",
		fontSize: mobile?"29px":"50px",
		color: "#052252",
		margin: "20px",
		// fontweight: "bold",
		borderBottom: "4px solid #052252",
		padding:"28px",
		textAlign: "center",
		justifyContent: "center",
		alignItems: "center",
		// height: "200px",
		"fontFamily":"\"Tangerine\", cursive",
		"fontWeight":"1000",
		"fontStyle":"normal"
	}
	const custom4 = {
		display: "flex",
		flexDirection: mobile?"column":"row",
		justifyContent: "space-between",
		alignItems: mobile?"stretch":"flex-start",
		padding: mobile?"10px":"30px",
		
		
		
	}
	const custom5 = {
		
	}
	const custom6 = {
		"width":mobile?"100%":"250%",
		"height":mobile?"50vh":"100vh",
		"backgroundImage":"url('./Images/zebra.jpg')",
		"backgroundSize":"cover",
		"backgroundPosition":"center",
		backgroundColor: "#05224550",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		textAlign: "center",
		color: "#fff",
		marginBottom: "15px"
		

	}
	const custom7 = {

	}

  return (
    <div style={custom1}>
		<div style={custom2}>
			<div style={custom3}>
				<img src='Images/praying.jpg' style={auto_images}/>
			</div>
			<h2 style={note}>
					But from there you will seek the Lord your God, and you will
				 	find Him if you seek Him with all your heart and with all your soul.<br/>
					Join us every Sabbath and let’s delve together into the Word of
					God, and in praise and worship.
			</h2>
		</div>
		<div style={custom4}>
			<div style={custom5}>
				<div style={custom6}>
					What a flellowshop,<br/> what a joy divine,<br/> leaning on the everlasting arms
				</div>				
			</div>
			<div style={custom7}>
				<Activity_card
					startD="" 
					endD="12 - 17"
					description="Week"
					sabbath="Week of Spiritual Emphasis"
					 />
				<Activity_card
					startD="" 
					endD="3 - 24"
					description="Half-week"
					sabbath="Health week"
					 />
				<Activity_card
					startD="" 
					endD="17 - 31"
					description="Sabbath"
					sabbath="Music Sabbath"
					 />
				<Activity_card
					startD="" 
					endD="Oct 26 - Nov 1"
					description="Weekend"
					sabbath="AMO Weekend and Sabbath"
					 />
			</div>
		</div>
		<div>

		</div>
	 
    </div>
  )
}

export default Central;
