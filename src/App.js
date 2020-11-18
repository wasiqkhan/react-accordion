import React from "react";
import data from "./data";
import Accordion from "./Accordion";



function App() {
  /* function to generate a random number to be used for generating random color using hsl */
  const randomColor=()=>{
    const random=Math.random()*360;
    return random;
 }

  return (
    <main>
    <section className="container">
      <h3>Coronavirus - Facts, advice<br></br>and measures</h3>
      {data.map((item)=>{
        return(
          <Accordion key={item.id} {...item} random={randomColor()} ></Accordion>
        )
      })}
     
     
    </section>
    </main>
  );
}

export default App;
