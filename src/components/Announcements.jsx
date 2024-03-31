import React from 'react'
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';

function Announcements() {

	const custom1 = {

	}
	const custom2 = {
		height: "50vh"
	}
  return (
    <div>
	<Header/>
	<Sidebar/>
	<div style={custom2}>
		No Announcements at the moment
	</div>
	<Footer/>	 
    </div>
  )
}

export default Announcements
