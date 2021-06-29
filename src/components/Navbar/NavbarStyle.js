import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {GiShoppingBag} from 'react-icons/gi'
import {HiOutlineMenuAlt2} from 'react-icons/hi'
import {TiTimes} from 'react-icons/ti'


export const NavbarContainer = styled.nav `
    width: 100%;
    height: 60px;
    background-color: #030a1c;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 40px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;

    .logoAndMenuIcon{
        display: flex;
        align-items: center;
    }

    @media screen and (max-width: 600px){
        padding: 0 20px;
    }
`

export const MenuIcon = styled(HiOutlineMenuAlt2) `
    font-size: 35px;
    cursor: pointer;
    margin: 0 30px 0 0;
    color: #ddd;
`
export const CloseIcon = styled(TiTimes) `
    font-size: 35px;
    cursor: pointer;
    margin: 0 30px 0 0;
    color: #ddd;
`
export const NavLogo = styled(Link) `
    text-decoration: none;
    font-size: 24px;
    font-weight: 700;
    color: #ddd;
    font-family: 'Yellowtail', cursive;
    text-transform: uppercase;
`

export const CartBox = styled(Link) `
    text-decoration: none;
    color: red;
    padding: 5px 15px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
    position: relative;

    .cart-text{
        font-size: 20px;
    }

    .count{
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background-color: #ddd;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        left: 60%;
        top: 30%;
    }

`
export const Cart = styled(GiShoppingBag) `
    font-size: 30px;
    cursor: pointer;
    margin: 0 10px;
`