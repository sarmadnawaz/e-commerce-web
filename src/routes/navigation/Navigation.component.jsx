import React from 'react'
import { NavigationBar, NavigationContainer, Logo, NavLinks, NavLink } from './Navigation.styles.jsx'
import { Outlet } from 'react-router-dom'


function Navigation (){
    return (
        <>
        <NavigationBar>
        <NavigationContainer>
            <Logo>GENZOUTFIT</Logo>
            <NavLinks>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>Shop</NavLink>
                <NavLink to='/auth'>Sign In</NavLink>
            </NavLinks>
        </NavigationContainer>
        </NavigationBar>
        <Outlet />
        </>
    )
}

export default Navigation