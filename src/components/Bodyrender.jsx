import React from "react";
import Section from "./Section";
import data from "../data/data.json";
import Altsection from "./Altsection";


function Bodyrender (props) {
  const anyTextBody = JSON.parse(JSON.stringify(data.body));
 const dataEntries = Object.entries(anyTextBody);
 const newDataEntries = dataEntries.map((item, index) => {return item[1].p});
 const newDataEntries100 = newDataEntries.map(e=> {return e.substring(0,100)+"...read more"});
 
 const rendarSection = dataEntries.map((item, index) => {  return <Section key={item[0]} h1={item[1].h1} h2={item[1].h2} h3={item[1].h3} text={newDataEntries100[index]} /> })
 
 
 return (
   <>
  {rendarSection}
   <altsection dataTag="banner" dataImg="https://picsum.photos/200/300" dataLink="/"></altsection>
    <altsection dataTag="banner" dataImg="https://picsum.photos/300/200" dataLink="/"></altsection>
    <altsection dataTag="banner" dataImg="https://picsum.photos/400/200" dataLink="/"></altsection>
  <Altsection />
   
  </>
)

}


export default Bodyrender;