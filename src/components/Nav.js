import React from 'react'
import { NavLink } from "react-router-dom";
import styled from 'styled-components'



function Nav() {
    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/characters">Characters</NavLink>
            <NavLink to="/episodes">Episodes</NavLink>
            <NavLink to="/locations">Locations</NavLink>
        </nav>
    )
}

export default Nav;