import React from 'react'
import { NavLink } from "react-router-dom";
import styled from 'styled-components'

const StyledDiv = styled.div`
    display: flex; 
`

const StyledNav = styled.div`
    margin: 10px;
    color: #00B0CE;
    link-decoration: none;
`

function Nav() {
    return (
        <StyledDiv >
            <NavLink to="/">Home</NavLink>
            <StyledNav />
            <NavLink to="/characters">Characters</NavLink>
            <StyledNav />
            <NavLink to="/episodes">Episodes</NavLink>
            <StyledNav />
            <NavLink to="/locations">Locations</NavLink>
            <StyledNav />
        </StyledDiv >
    )
}

export default Nav;