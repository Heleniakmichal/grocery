import React from "react";



function Section (props) {
return (
  <>
    
    <section>
      <h1>{props.h1}</h1>
      <h2>{props.h2}</h2>
      <h3>{props.h3}</h3>
      <p>{props.text}</p>
      <img src="https://picsum.photos/200" alt=""/>
    </section>
  </>
)
}

export default Section;