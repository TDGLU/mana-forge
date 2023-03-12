import React from 'react'


function CardContainer(props) {

  console.log(props.cardData.artist)
  console.log(props.cardData.image_uris.normal)

  return (
    <div>
        {/* <h2>{props.cardData.summary}</h2> */}
        <h2>{props.cardData.cardName}</h2>

        {/* Card  */}
        <div className="prop-card">
          <img src={props.cardData.image_uris.normal} alt="card image" />
          <p>Author: <span>{props.cardData.artist}</span></p>
          {/* {props}  */}
        </div>

        {/* <p className='dataFetch'>{JSON.stringify(props.cardData)}</p>  */}
        
    </div>
  )
}

console.log()

export default CardContainer