import React from 'react'
import { NavigationBar, NavigationContainer, Logo, NavLinks, NavLink } from './Navigation.styles.jsx'


function Navigation (){
    return (
        <NavigationBar>
        <NavigationContainer>
            <Logo>OutFitter</Logo>
            <NavLinks>
                <NavLink href='#'>Home</NavLink>
                <NavLink href='#'>Shop</NavLink>
                <NavLink href='#'>Sign In</NavLink>
            </NavLinks>
        </NavigationContainer>
        </NavigationBar>
    )
}

export default Navigation