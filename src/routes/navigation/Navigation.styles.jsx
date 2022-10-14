import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const NavigationBar = styled.div`
    width: 100%;
    color: #000;
    display: flex;
    justify-content: center;
    padding : 10px 0px;
    border-bottom : 0.5px solid black
`

export const NavigationContainer = styled.div`
    display : flex;
    justify-content: space-between;
    width: 90%;
    height : 70px
    margin-bottom : 25px
`
export const Logo = styled.img` 
    width : 280px;    
    height : 55px;
`
export const NavLinks = styled.div`
    display : flex;
    align-items: center;
    justify-content: start;
    gap: 20px;

`
export const NavLink = styled(Link)`
    font-size: 18px;
    font-weight : 600;
    text-decoration : none;
    color: #000;
    padding : 10px 25px;
    border-radius : 5px;
    &:hover{
        color: #EDEDED;
        background-color : #1a1a1a;
        transform : scale(1.075);
    }
`
