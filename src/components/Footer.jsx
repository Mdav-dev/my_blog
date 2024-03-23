import React, {useState, useEffect} from 'react'
import { MdOutlineCopyright } from "react-icons/md";
import { HiOutlineBars3CenterLeft } from "react-icons/hi2";



function Footer() {
  function getCurrentYear() {
    const currentDate = new Date();
    return currentDate.getFullYear();
  }
  const year = getCurrentYear();

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
    flexDirection:mobile?"column":"",
    // justifyContent:"space-between",
    background: "#052252",
    padding: "1%",
    color: "#fff",
    gap:mobile?"30px":"50px",
    width: "82%",
    bottom:"0",
    padding: "4%",

  }
  const custom2 = {

  }
  const custom3 = {

  }
  const custom4 = {

  }
  const cright = {
    padding: "0",
    margin: "0",
  }
  const p1 = {
    fontFamily:"\"noto sans\", helvetica, arial, sans-serif",
    fontSize: "19px",

  }
  const p2 = {
    fontFamily:"\"noto sans\", helvetica, arial, sans-serif",
    fontSize: "13px",
  }
  const p3 = {
    fontFamily:"\"noto sans\", helvetica, arial, sans-serif",
    fontSize: "12px",
    fontWeight: "bold",
    textDecoration: "none",
    color: "#fff",
  }
  const p4 = {
        display: "flex",
        alignItems: "flex-end",
    a:{
      fontFamily:"\"noto sans\", helvetica, arial, sans-serif",
      fontSize: "13px",
      textDecoration: "none",
      color: "#fff",
    }
  }
  const icon = {
    height: "14px",
    width: "14px",
    fontWeight: "600",
    color: "#fff",
  }
  return (
    <div style={custom1}>
      <div style={custom2}>
          <p style={p1}>maasaimarauniversitysda.or.ke is the 
          official website of the <br/> Seventh-day Adventist 
          Church Maasai Mara University.</p>
          {mobile?"":<div><br/><br/></div>}
          
          {mobile?"":<p style={p2}><MdOutlineCopyright style={cright}/> {year} Seventh-Day Adventist Church Maasai Mara University.<br/>
          Maasai Mara University, Lecture Theatre 201.(LT 201)</p>}
      </div>
      <div>
        <p><a style={p3} href='https://www.facebook.com'>FACEBOOK</a></p>
        <p><a style={p3} href='https://www.x.com'>X</a></p>
        <p><a style={p3} href='https://www.instagram.com'>INSTAGRAM</a></p>        
      </div>
      <div>
      <p style={p4}><HiOutlineBars3CenterLeft style={icon}/> <a style={p4.a} href='https://www.adventist.org/trademark-and-logo-usage/'>TRADEMARK AND LOGO USAGE</a></p>
      <p style={p4}><HiOutlineBars3CenterLeft style={icon}/> <a style={p4.a} href='https://www.adventist.org/legal-notice/'>LEGAL NOTICE</a></p>
      <p style={p4}><HiOutlineBars3CenterLeft style={icon}/> <a style={p4.a} href='https://privacy.adventist.org/'>PRIVACY POLICY</a></p>      
      </div>
      {mobile?<p style={p2}><MdOutlineCopyright style={cright}/> {year} Seventh-Day Adventist Church Maasai Mara University.<br/>
          Maasai Mara University, Lecture Theatre 201.(LT 201)</p>:""}
	 
    </div>
  )
}

export default Footer
