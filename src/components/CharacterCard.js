import React from 'react'

export default function CharacterCard (props) {
    
    const {name, status, species, origin, location, characterImg} = props;

    return (
        <div>
        <img src={characterImg}/>
        <div>
          <div>{name}</div>
          <div>{species} {status}</div>
          <div> Location: {location} </div>
          <div>Origin: {origin}</div>
        </div>
    <div>
      Episodes 
    </div>
  </div>
  )
}