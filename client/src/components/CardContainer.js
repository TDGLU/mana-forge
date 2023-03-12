import React from 'react'


function CardContainer(props) {

  console.log(props.cardData)
  // console.log(props.cardData.artist)
  // console.log(props.cardData.image_uris.normal)

  return (
    <div className='card-container'>
        {/* <h2>{props.cardData.summary}</h2> */}
        <h3>Your Card</h3>

        {/* Card  */}
        <div className="prop-card">
          {/* image  */}
          <img src={props.cardData.image_uris ? props.cardData.image_uris?.normal : "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Question_mark_%28black%29.svg/1024px-Question_mark_%28black%29.svg.png"} alt="card image" />

          {/* Title of card */}
          <p>{props?.cardData.name}</p>

          {/* Author  */}
          <p>Author: <span>{props?.cardData.artist}</span></p>

          {/* Rarity  */}
          <p>Rarity: <span>{props?.cardData.rarity}</span></p>

          {/* Tough */}
          <p>toughness: <span>{props?.cardData.toughness }</span></p>
        </div>

        {/* <p className='dataFetch'>{JSON.stringify(props.cardData)}</p>  */}
        
    </div>
  )
}

export default CardContainer