import React from "react"
import "./bt.css"
function Buttons(props){
    return (
    <>
     <button onClick={props.onclick} id={props.id} style={props.styles}>{props.text}</button>
    </>
    );
}
export default Buttons