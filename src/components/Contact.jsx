import React, {useState, useEffect} from 'react'
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';

function Contact() {

	const[mobile, setMobile] = useState(false);	  
	useEffect(() => {
		function getScreenSize() {
		  return window.screen.width;
		}	 
		if (getScreenSize()< 500) {
		  setMobile(true);
		}   
	   }, []);


	   const custom1= {
	   }
	const custom4 = {
		display: "flex",
		flexDirection: mobile?"column":"row",
		justifyContent: "space-between",
		alignItems: mobile?"stretch":"stretch",
		padding: mobile?"10px":"30px",
		width: "82%",
		
		
	}
	const custom5 = {
		
	}
	const custom6 = {
		"width":mobile?"100%":"290%",
		"height":mobile?"50vh":"100vh",
		"backgroundImage":"url('./Images/hills.jpg')",
		"backgroundSize":"cover",
		"backgroundPosition":"center",
		backgroundColor: "#05224550",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		textAlign: "center",
		color: "#fff",
		marginBottom: "15px",
		fontWeight: "bold",
		fontSize: mobile?"20px": "35px",

	}
	const custom7 = {
		display:"flex",
		flexDirection:"column",
		justifyContent:"center",
		alignItems:"center",
		width:"50%"
	}
	const inputBox = {
		width: '100%',
		padding: '10px',
		marginBottom: '10px',
		border: '1px solid #ccc',
		borderRadius: '5px',
		boxSizing: 'border-box',
		display: 'block',
	   }
	   const inputBox1 = {
		width: '100%',
		padding: '10px',
		marginBottom: '10px',
		border: '1px solid #ccc',
		borderRadius: '5px',
		boxSizing: 'border-box',
		display: 'block',
		height:'30vh'
	   }
	   const submitButton = {
		width: '100%',
		padding: '10px',
		backgroundColor: '#007bff',
		color: '#fff',
		border: 'none',
		borderRadius: '5px',
		cursor: 'pointer',
	   }
	   const form={
		width:"100%"
	   }

  return (
    <div style={custom1}>
    <Header/>
    <Sidebar/>
	<div style={custom4}>
			<div style={custom5}>
				<div style={custom6}>
					Contact us<br/> Here
				</div>				
			</div>
			<div style={custom7}>
				<form style={form}>
					<input style={inputBox} type="text" placeholder="Name" required/>
					<input style={inputBox} type="text" placeholder="Email"/>
					<input style={inputBox} type="text" placeholder="Subject"/>
					<input style={inputBox1} type="textarea" placeholder="Message"/>
					<input style={inputBox} type="text" placeholder="Contact no." required/>
					<button style={submitButton} type="submit">Submit</button>
				</form>
				<hr/>
			</div>
		</div>
	<Footer/>	 
    </div>
  )
}

export default Contact
