import React from 'react'

function Sidebar() {
  const custom1={
    display:"flex",
    flexDirection: "column",
    background: "#2e6de7",
    width: "14%",
    height: "100vh",
    position:"fixed",
    right: "0",
    top: "0",
    bottom: "0",
  }
  const custom2 = {
    padding: "1px"
  }
  return (
    <div style={custom1}>
      <img src='/Images/sdaw.svg' alt='SDA Logo' style={custom2} />
    </div>
  )
}

export default Sidebar
