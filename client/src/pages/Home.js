import React, { useState } from 'react'
import SearchBar from '../components/SearchBar'

function Home(props) {
  return (
    <>
      <h3>Home</h3>
      <SearchBar cardName={props.cardName} setCardName={props.setCardName} searchForCard={props.searchForCard} />
    </>
  )
}

export default Home