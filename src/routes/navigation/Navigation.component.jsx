import React, { useContext } from 'react'
import { NavigationBar, NavigationContainer, Logo, NavLinks, NavLink } from './Navigation.styles.jsx'
import { Outlet } from 'react-router-dom'
import { signOutUser } from '../../utilz/firsbase/firebase.utils'
import { UserContext } from '../../context/user.context.jsx'
import CartIcon from '../../components/cart-icon/CartIcon.component.jsx'
import CartDropdown from '../../components/cart-dropdown/CartDropdown.component.jsx'
import { CartContext } from "../../context/cart.context";
function Navigation (){
    const user = useContext(UserContext)
    const { isCartOpen, setIsCartOpen, totalItems } = useContext(CartContext); 
    return (
        <>
        <div style={{ height : '15vh' , boxSizing : 'border-box'}}>
        <NavigationBar>
        <NavigationContainer>
            <Logo src="Genz.jpg" alt="GENZ outfit Logo" />
            <NavLinks>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/shop'>Shop</NavLink>
                { user ? 
                <span onClick={signOutUser}>Sign Out</span> :
                <NavLink to='/auth'>Sign In</NavLink>
                }      
            <CartIcon  totalItems={totalItems} onClick={() => setIsCartOpen(!isCartOpen)} />
            </NavLinks>
        </NavigationContainer>
        </NavigationBar>
        </div>
        <CartDropdown />
        <Outlet />
        </>
    )
}

export default Navigation