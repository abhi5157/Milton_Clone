import React from 'react';
import "./Section2.css"

function Section2(props) {
  return (
    <section className="main-section">
      <p className="section-tagline">{props.heading}</p>

      <h2 className="section-heading">
       {props.subHeading} 
      </h2>

    </section>
  ); 
}

export default Section2;