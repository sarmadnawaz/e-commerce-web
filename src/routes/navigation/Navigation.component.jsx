import React, { useContext } from 'react'
import { NavigationBar, NavigationContainer, Logo, NavLinks, NavLink } from './Navigation.styles.jsx'
import { Outlet } from 'react-router-dom'
import { signOutUser } from '../../utilz/firsbase/firebase.utils'
import { UserContext } from '../../context/user.context.jsx'
 

function Navigation (){
    const user = useContext(UserContext)
    return (
        <>
        <NavigationBar>
        <NavigationContainer>
            <Logo>GENZOUTFIT</Logo>
            <NavLinks>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>Shop</NavLink>
                { user ? 
                <span onClick={signOutUser}>Sign Out</span> :
                <NavLink to='/auth'>Sign In</NavLink>
                }      
            </NavLinks>
        </NavigationContainer>
        </NavigationBar>
        <Outlet />
        </>
    )
}

export default Navigation