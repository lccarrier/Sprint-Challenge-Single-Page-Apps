import React from "react";
import styled from 'styled-components'

const StyledH = styled.h1`
  color: #00B0CE;
  font-family: system-ui;
  font-size: 22px;
  font-weight: 900;
`

export default function Header() {
  return (
    <StyledH>
      <h1>Rick &amp; Morty Fan Page</h1>
    </StyledH>
  );
}
