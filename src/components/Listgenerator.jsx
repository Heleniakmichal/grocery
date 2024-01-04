import React from "react";
import data from "../data/data.json";
import List from "../components/List";

function Listgeberator () {
  const listdatajson = JSON.parse(JSON.stringify(data.list));
  const dataEntries = Object.entries(listdatajson);
  
  const [[text,list]] = dataEntries;
  list.sort();
  let newList = list.map(e=> 
   <List key={e} textbutton={e}/>);
  return <>
  <ul className="list">
    {newList}
  </ul>
  </>
  
  }


export default Listgeberator;