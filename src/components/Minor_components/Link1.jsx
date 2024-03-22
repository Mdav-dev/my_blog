import React from 'react'

function Link1(props) {
  const custom1 = {
    cursor: "pointer",

  }
  const custom2 = {
    fontFamily:"\"noto sans\", helvetica, arial, sans-serif",
    color: props.link_color,
    fontSize: "14px",
    fontWeight: "400",
    textDecoration: "none",
  }
  return (
    <div style={custom1} id={props.id}>
      <a style={custom2} href={props.title}>{props.title}</a>
    </div>
  )
}

export default Link1;
