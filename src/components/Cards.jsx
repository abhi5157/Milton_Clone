import React from 'react'
import "./cards.css"
import cards from './cardsData'

function Card(props) {
    return (
      <div className="card">
        <img src={props.img} className="card-img"/>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>
    );
  }


function Cards() {
  return (
    <div className="card-container">
    {cards.map(card => (
      <Card 
        key={card.id}
        img={card.img}
        title={card.title}
        description={card.description} 
      />
    ))}
  </div>
  )
}

export default Cards