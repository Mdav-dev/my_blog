import React, { useState } from 'react'
import Link1 from './Minor_components/Link1'
import Link2 from './Minor_components/Link2'

function Nav_bar(props) {
  var check = props.test;
  const custom1 = {
    background: "blue",
    width: "70%",
    height: "100vh",
    position: "fixed",
    top: "0",
    left: check?"0":"-100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
		flexDirection: "column",
		color: "white",
		alignItems: "center",
		transition: "1350ms",
		zIndex: "999",

    
  }
  const custom2 = {
    display: "flex",
    flexGrow: "1",


  }
  const custom3 = {
    display: "flex",
    flexDirection: "column",


  }
  const custom4 = {
    display: "flex",
    flexDirection: "column",

   
  }
  const logo = {
    width: "50px",
    height: "50px",
    flexGrow: "1",
  }
  const custom5 = {
    display: "flex",
    flexGrow: "1",

    
  }
  const custom6 = {
    display: "flex",

    
  }
  const custom7 = {
    display: "flex",

    
  }
  return (
    <div style={custom1}>
      <div style={custom2}>
        <div style={custom3}>
            <Link2 title="Home" test={false}/>
            <Link2 title="About Us" test={true}/>
            <Link2 title="Beliefs" test={true}/>
            <Link2 title="Resources" test={true}/>
            <Link2 title="Downloads" test={true}/>
            <Link2 title="Announcements" test={false}/>
            <Link2 title="Contact Us" test={false}/>
          </div>	 
          <div style={custom4}>
            <Link1 title="GIVING" />
            <Link1 title="PRAYER REQUEST" />
            <Link1 title="ANNOUNCEMENTS" />
          </div>
      </div>
          <img src='Images/sdaw.svg' style={logo}/>
      <div style={custom5}>
          <div style={custom6}>
            <p>maasaimarauniversitysda.or.ke is the official 
            website of the Seventh-day Adventist
            church Maasai Mara University.</p>
            <p>Seventh-day Adventists are devoted to helping 
            people understand the Bible to find
            freedom, healing, and hope in Jesus.</p>
          </div>
          <div style={custom7}>
            <h2>LEARN MORE:</h2>
            <Link2 title="Adventist.org" test={false}/>
            <Link2 title="ADRA" test={false}/>
            <Link2 title="Adventist World Radio" test={false}/>
          </div>
      </div>
    </div>
  )
}

export default Nav_bar
