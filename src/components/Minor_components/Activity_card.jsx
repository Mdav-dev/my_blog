import React from 'react'

function Activity_card() {

	const custom1 = {
		display: "grid",
		gridTemplateColumns: "1fr 3fr",
		gridTemplateRows: "1fr 2fr",
	}
	const custom2 = {
		gridColumn: "1/2",
		gridRow: "1/2",
		color: "black",

	}
	const custom3 = {
		gridColumn: "2/3",
		gridRow: "1/2",
		color: "blue",

	}
	const custom4 = {
		gridColumn: "1/2",
		gridRow: "2/3",
		color: "violet",

	}
	const custom5 = {
		gridColumn: "2/3",
		gridRow: "2/3",
		color: "red",

	}
  return (
    <div style={custom1}>
		<div style={custom2}>
		
		</div>
		<div style={custom3}>

		</div>
		<div style={custom4}>

		</div>
		<div style={custom5}>

		</div>	 
    </div>
  )
}

export default Activity_card
