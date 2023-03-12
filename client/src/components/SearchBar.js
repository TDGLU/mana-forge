import React, { useState } from 'react'

function SearchBar(props) {


     async function updateDisplayCardName(name) {
        props.setCardName(name)
     }

    return (
        <div className='search-section'>
            <form>
                <label className="card-name" placeholder='Enter card name'>Lookup Card:</label>
                <input className='form-interact'
                    type="text" 
                    id="card-name" 
                    name="card-name" 
                    value={props.cardName}
                    onChange={(e) => updateDisplayCardName(e.target.value) }
                    />
                <button className='form-interact search-btn' type="button" onClick={(e) => props.searchForCard(e)}>Search</button>
            </form>
        </div>
    )
}

export default SearchBar