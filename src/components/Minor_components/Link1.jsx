import React from 'react'

function Link1(props) {
  const custom1 = {

  }
  const custom2 = {
    fontFamily:"\"noto sans\", helvetica, arial, sans-serif",
    color: "grey",
    fontSize: "14px",
    fontWeight: "400",
  }
  return (
    <div style={custom1} id={props.id}>
      <a style={custom2} src={props.title}>{props.title}</a>
    </div>
  )
}

export default Link1;
