import React, {useState} from 'react'

function Link1(props) {
  const [col, setCol] = useState(false)
  var color1 = props.link_color;

  function handleHover(){
    setCol(true);
  }
  function handleOut(){
    setCol(false)
  }

  if(color1 == "#fff"&&col){
    color1 = "grey";
  }else{
    color1 = props.link_color;
  }
  if(color1 == "grey"&&col){
    color1 = "#2E6DE7"
  }else{
    color1 = props.link_color;
  }



  const custom1 = {
    cursor: "pointer",

  }
  const custom2 = {
    fontFamily:"\"noto sans\", helvetica, arial, sans-serif",
    color: color1,
    fontSize: "15px",
    fontWeight: "400",
    textDecoration: "none",
  }
  return (
    <div onMouseOver={handleHover} onMouseOut={handleOut} style={custom1} id={props.id}>
      <a style={custom2} src={props.href}>{props.title}</a>
    </div>
  )
}

export default Link1;
