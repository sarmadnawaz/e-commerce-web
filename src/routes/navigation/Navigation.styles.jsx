import styled from 'styled-components'

export const NavigationBar = styled.div`
    width: 100%;
    background-color : #0F3460;
    color: #EDEDED;
    display: flex;
    justify-content: center;
    padding : 10px 0px
`

export const NavigationContainer = styled.div`
    display : flex;
    justify-content: space-between;
    width: 90%;
    height : 70px
    margin-bottom : 25px
`
export const Logo = styled.p`
    font-size : 48px;
    font-weight : 700;
    margin : 0;
    padding : 0;
    font-family: 'Arizonia', cursive;
`
export const NavLinks = styled.div`
    display : flex;
    align-items: center;
    justify-content: start;
    gap: 20px;

`
export const NavLink = styled.a`
    font-size: 18px;
    font-weight : 600;
    text-decoration : none;
    color: #EDEDED;
    padding : 5px 10px;
    border-radius : 5px;
    &:hover{
        background-color : #16213E;
        transform : scale(1.075);
    }
`
