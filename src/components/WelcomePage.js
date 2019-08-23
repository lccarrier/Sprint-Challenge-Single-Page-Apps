import React from "react";
import styled from 'styled-components'

const StyledTitle = styled.h1`
  font-family: system-ui;
  font-size: 22px;

`

export default function WelcomePage() {
  return (
    <section>
      <header>
        <StyledTitle>Welcome to my site!</StyledTitle>
        <img
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
      </header>
    </section>
  );
}
