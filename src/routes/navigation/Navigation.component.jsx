import React from 'react'
import { NavigationBar, NavigationContainer, Logo, NavLinks, NavLink } from './Navigation.styles.jsx'
import { Outlet } from 'react-router-dom'


function Navigation (){
    return (
        <>
        <NavigationBar>
        <NavigationContainer>
            <Logo>OutFitter</Logo>
            <NavLinks>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/'>Shop</NavLink>
                <NavLink to='/SignIn'>Sign In</NavLink>
            </NavLinks>
        </NavigationContainer>
        </NavigationBar>
        <Outlet />
        </>
    )
}

export default Navigation