import React from "react";
import styled from 'styled-components'

const StyledDiv = styled.div`
   margin-bottom: 20px;
   -webkit-box-shadow: 1px 1px 1px 1px #ccc;
   padding: 4px 0px 10px 10px;
`

const StyledH = styled.h1`
  color: black;
  font-family: system-ui;
  font-size: 18px;
  margin-bottom: 4px;
`

const StyledP = styled.p`
  color: grey;
  font-size: 14px;
  line-height: 18px;
  margin: 0px;
  font-family: system-ui;
`

export default function EpisodeCard(props) {
  const { name, airdate, episode } = props;

  return (
    <StyledDiv>
      <div>
        <StyledH>{name}</StyledH>
        <StyledP>
          {episode} {airdate}
        </StyledP>
      </div>
    </StyledDiv>
  );
}
