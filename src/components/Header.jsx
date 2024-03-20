import React, {useState, useEffect} from 'react'
import Nav_bar from './Nav_bar';
import Link1 from './Minor_components/Link1';
import Link2 from './Minor_components/Link2';
import { FaBars } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";



function Header() {
  const[mobile, setMobile] = useState(false);	
  
	useEffect(() => {
		function getScreenSize() {
		  return window.screen.width;
		}	 
		if (getScreenSize()< 500) {
		  setMobile(true);
		}   
	   }, []); 

     var display = false;
     function handleClick(){
        display = true;
     }
     function handleReturn(){
        display = false;
     }
     
  const custom1 = {
    display: "flex",
    flexDirection: mobile?"column":"",
    justifyContent: "space-between",
    alignItems: "center",
    width: "84%",
    borderBottom: "4px solid #052252",
    height: "100px"

  }
  const custom2 = {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-end",
    width:mobile?"250px":"200px,"
  }
  const custom3 = {
    height: "80px",   

  }
  const custom4 = {
    fontFamily:"\"noto sans\", helvetica, arial, sans-serif",
    color: "#2e6de7",
    fontSize: "16px",
    fontWeight: "normal",
    fontSize:mobile?"13px":"15px",
  }
  const custom5 = {
    display:mobile?"none":"flex",
    flexDirection:"column",
    justifyContent: "space-evenly",
    height: "100px",    

  }
  const custom6 = {
    display: "flex",
    justifyContent: "flex-end",
    gap: "12px",
    a:{
      height:"14px",
      color: "grey",
    },
  }
  const custom7 = {
    display: "flex",
    justifyContent: "flex-end",
    gap: "12px",

  }
  const b = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  }
  const menu_init = {
    height: "100vh",
    width: "100%",
    background: "#05225230",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    padding: "5%",    
    position: "fixed",
    left:display?"0":"100%",
    transition: "750ms",
		zIndex: "995",
    a:{
      color: "white",
      width: "25px"
    }
  }



  
  return (
    <div style={custom1}>

      <div style={custom2}>
        <img src='/Images/sdab.svg' alt='SDA Logo' style={custom3} />
        <p style={custom4}>Maasai Mara University<br/> Seventh-day Adventist Church</p>
      </div>

     {mobile?<div><div onClick={handleClick()} style={b}>
          <FaBars style={custom6.a}/>
          <Link1 title="MENU" />
          </div></div>:
        <div style={custom5}>
            <div style={custom6}>
              <Link1 title="GIVING" />
              <Link1 title="PRAYER REQUEST" />
              <Link1 title="ANNOUNCEMENTS" />
              <div onClick={handleClick()} style={b}>
                <FaBars style={custom6.a}/>
                <Link1 title="MENU" />
              </div>
            </div>

            <div style={custom7}>
              <Link2 title="Home" test={false}/>
              <Link2 title="About Us" test={true}/>
              <Link2 title="Beliefs" test={true}/>
              <Link2 title="Resources" test={true}/>
              <Link2 title="Downloads" test={true}/>
              <Link2 title="Announcements" test={false}/>
              <Link2 title="Contact Us" test={false}/>
            </div>
            <div style={menu_init}><IoCloseSharp onClick={handleReturn()} style={menu_init.a}/></div>
            <Nav_bar test = {display} />
          </div>} 
    </div>
  )
}

export default Header
