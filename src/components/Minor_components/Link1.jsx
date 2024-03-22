import React from 'react'

function Link1(props) {
  const custom1 = {
    cursor: "pointer",

  }
  const custom2 = {
    fontFamily:"\"noto sans\", helvetica, arial, sans-serif",
    color: props.link_color,
    fontSize: "15px",
    fontWeight: "400",
    textDecoration: "none",
  }
  return (
    <div style={custom1} id={props.id}>
      <a style={custom2} src={props.href}>{props.title}</a>
    </div>
  )
}

export default Link1;
