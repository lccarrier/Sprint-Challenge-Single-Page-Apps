import React from 'react'
import styled from 'styled-components'
import EpisodesList from './EpisodesList';

const StyledCard = styled.div`
  -webkit-box-shadow: 1px 1px 1px 1px #ccc;
  margin-bottom: 20px;
  padding: 10px 0px 10px 10px;
`

const StyledH = styled.h1`
  color: black;
  font-family: system-ui;
  font-size: 22px;
  margin-bottom: 4px;
`

const StyledP = styled.p`
  color: grey;
  font-size: 14px;
  line-height: 18px;
  margin: 0px;
  font-family: system-ui;
`


export default function CharacterCard (props) {
    
    const {name, status, species, origin, location, characterImg} = props;

    return (
        <StyledCard>
        <img src={characterImg}/>
        <div>
          <StyledH>{name}</StyledH>
          <StyledP>{species} {status}</StyledP>
          <StyledP> Location: {location} </StyledP>
          <StyledP>Origin: {origin}</StyledP>
        </div>
    <StyledP>
      Episodes:
    </StyledP>
  </StyledCard>
  )
}