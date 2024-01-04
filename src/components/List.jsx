import React from "react";
import { useState } from "react";
import "./style.css";

function List (props) {
 
  const [clicked, setClicked] = useState('');
  
  function onClickhandlar () {
    setClicked('clicked');
    if(clicked === 'clicked') {
      setClicked('');
    }
  }
  
  return ( 
        <li className={"listButton "+`${clicked}`} onClick={onClickhandlar}>
        {props.textbutton}
        </li>
  )
}


export default List;