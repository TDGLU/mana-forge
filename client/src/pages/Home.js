import React, { useState } from 'react'
import SearchBar from '../components/SearchBar'
import CardContainer from '../components/CardContainer'

function Home(props) {

  const [cardNameVar, setCardNameVar] = useState('')
  const [cardData, setCardData] = useState({})

  async function searchForCard(e) {
    e.preventDefault()
    const name = encodeURIComponent(cardNameVar);
    const url = `https://api.scryfall.com/cards/named?fuzzy=${name}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        setCardData(data)
    } catch (error) {
        console.error(error);
    }
  }
  
  return (
    <>
      <h3>Home</h3>
      <SearchBar cardName={cardNameVar} setCardName={setCardNameVar} searchForCard={searchForCard} />

    <CardContainer cardData={cardData} />
    </>
  )
}

export default Home