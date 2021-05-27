import React, {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import {NavbarContainer, NavLogo, CartBox, Cart} from './NavbarStyle'

const Navbar = () => {
    const cart = useSelector(state => state.shop.cart)
    const [totalCartAmount, setTotalCartAmount] = useState(0)

    var totalAmount = 0
    useEffect(() => {
        cart.forEach(el=>{
            totalAmount += el.qty
        })
        setTotalCartAmount(totalAmount)
    }, [cart])
    
    return (
        <NavbarContainer>
            <NavLogo to='/'>
                redux shoping caret
            </NavLogo>
            <CartBox to='/cart'>
                <span className="cart-text">cart</span>
                <Cart />
                <span className="count">{totalCartAmount}</span>
            </CartBox>
        </NavbarContainer>
    )
}

export default Navbar
