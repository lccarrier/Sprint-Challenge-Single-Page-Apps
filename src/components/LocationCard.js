import React from 'react'
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

const StyledButton = styled.button`
  background-color: #00B0CE; 
  border-color:  #00B0CE;
  border-radius: 4px;
  margin-top: 5px;
  color: white;
`

export default function LocationCard (props) {
    
    const {name, type, dimension, residents} = props;

    return (
        <StyledDiv>
          <div>
            <div>{name}</div>

            <div> {type} {dimension} </div>
            <StyledButton>
              {residents} residents
            </StyledButton>
          </div>
        </StyledDiv>

  )
}