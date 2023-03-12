import React from 'react'


function CardContainer(props) {
  return (
    <div>
        {/* <h2>{props.cardData.summary}</h2> */}
        <h2>{props.cardData.cardName}</h2>
        <p className='dataFetch'>{JSON.stringify(props.cardData)}</p>
        
    </div>
  )
}

console.log()

export default CardContainer