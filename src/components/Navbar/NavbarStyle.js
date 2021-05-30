import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {ImCart} from 'react-icons/im'
import {HiOutlineMenuAlt2} from 'react-icons/hi'


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
    color: #fff;
`
export const NavLogo = styled(Link) `
    text-decoration: none;
    font-size: 24px;
    font-weight: 700;
    color: #fff;
    text-transform: uppercase;
`

export const CartBox = styled(Link) `
    text-decoration: none;
    color: #000;
    padding: 5px 15px;
    background-color: #fff;
    border-radius: 10px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;

    .cart-text{
        font-size: 20px;
    }

    .count{
        padding: 10px;
        border-radius: 50%;
        background-color: #ddd;
    }

`
export const Cart = styled(ImCart) `
    font-size: 30px;
    cursor: pointer;
    margin: 0 10px;
`