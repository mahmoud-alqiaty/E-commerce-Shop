import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {AiOutlineShoppingCart} from 'react-icons/ai'


export const NavbarContainer = styled.nav `
    width: 100%;
    height: 60px;
    background-color: blue;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 40px;
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
export const Cart = styled(AiOutlineShoppingCart) `
    font-size: 30px;
    cursor: pointer;
    margin: 0 10px;
`