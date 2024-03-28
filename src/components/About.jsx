import React, {useState, useEffect} from 'react';
import About_card from './Minor_components/About_card';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';

function About() {
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
		width: "80%",
		padding: "3%",
	}
	const custom2 = {
		
	}
	const custom3 = {

	}
	const custom4 = {
		"fontFamily":"\"noto sans\", helvetica, arial, sans-serif",
		fontSize: "25px"
	}




	const a = "Make disciples of Jesus Christ who live as His loving witnesses " 
		+"and proclaim to all people the everlasting gospel of the Three Angels’ "+
		"Messages in preparation for His soon return (Matt 28:18-20, Acts 1:8, Rev 14:6-12)."

	const b = "Guided by the Bible and the Holy Spirit, Seventh-day Adventists"+
		" pursue this mission through Christ-like living, communicating, discipling, "+
		"teaching, healing, and serving."

	const c = "In harmony with Bible revelation, Seventh-day Adventists see as the climax of"+
		" God’s plan the restoration of all His creation to full harmony with His perfect will "+
		"and righteousness."

	const d = <p>The Seventh-day Adventist Church sees itself as the remnant Church of end-time Bible
		 prophecy. Members of the Church, individually and collectively, understand their special role as
	  	ambassadors of God’s kingdom and messengers of the soon return of Jesus Christ. Seventh-day 
	 	 Adventists have enlisted as co-workers with God in His mission of reclaiming the world from the 
	  	power and presence of evil, as part of the Great Controversy between Christ and Satan.
		<br/><br/>
		Therefore, every aspect of a Church member’s life is influenced by the conviction that we 
		live in the last days described in Bible prophecy and the return of Jesus Christ is imminent. 
		Seventh-day Adventists are called by God to live in this world. Every action of the Christian 
		life is done “in the name of Jesus” and to advance His kingdom.</p>
	
	const e = <p>Seventh-day Adventists affirm the Bible as God’s infallible revelation of His will,
		 accepting its authority in the life of the Church and of each believer, and its foundational
		 role for faith and doctrine. Seventh-day Adventists believe that the Holy Spirit is the power 
		that transforms lives and equips people with abilities to advance God’s kingdom in this world.<br/>
		<br/>Called by God, guided by the Bible, and empowered by the Holy Spirit, Seventh-day Adventists,
		wherever we live in the world, devote ourselves to:</p>

	const f = <p></p>

  return (
    <div>
    <Header/>
    <Sidebar />
	 <div style={custom1}>
	 <About_card
	 title = "Our Mission"
	 description = {a}
	  />
	  <About_card
	 title = "Our Method"
	 description = {b}
	  />
	  <About_card
	 title = "Our Vision"
	 description = {c}
	  />
	  <h1 style={custom4}>IDENTITY AND IMPLEMENTATION OF OUR MISSION</h1>
	  <About_card
	 title = "Our Identity"
	 description = {d}
	  />
	  <About_card
	 title = "Implementation of Our Mission"
	 description = {e}
	  />
	  <div style={custom2}>
		<ol>
			<li>Christ-Like Living—Illustrating the lordship of Jesus in our lives by
			 moral, ethical, and social behaviors that are consistent with the teachings 
			 and example of Jesus.
			 </li>
			<li>Christ-Like Communicating—Realizing that all are called to active witness, 
			we share through personal conversation, preaching, publishing, and the arts, the 
			Bible’s message about God and the hope and salvation offered through the life,
			 ministry, atoning death, resurrection, and high priestly ministry of Jesus Christ.
			 </li>
			<li>Christ-Like Discipling—Affirming the vital importance of continued spiritual 
			growth and development among all who accept Jesus as Lord and Savior, we nurture
			 and instruct each other in righteous living, provide training for effective witness,
			  and encourage responsive obedience to God’s will.
			  </li>
			<li>Christ-Like Teaching—Acknowledging that development of mind and character 
			is essential to God’s redemptive plan, we promote the growth of a mature understanding
			 of and relationship to God, His Word, and the created universe.
			 </li>
			<li>Christ-Like Healing—Affirming the biblical principles of the well-being of the whole
			 person, we make healthful living and the healing of the sick a priority and through our
			  ministry to the poor and oppressed, cooperate with the Creator in His compassionate work
			   of restoration.
			   </li>
			<li>Christ-Like Serving—Following the example of Jesus we commit ourselves to humble service,
			 ministering to individuals and populations most affected by poverty, tragedy, 
			 hopelessness, and disease.
			 </li>
		</ol>
		<p>This statement was voted by the General Conference of Seventh-day Adventists Executive Committee
		 at the Annual Council Session in Silver Spring, Maryland on October 13, 2014.
		 </p>
	  </div>
	 </div>
	 <Footer />
    </div>
  )
}

export default About
