import React, {useEffect, useState, useContext} from 'react'
import {useSelector} from 'react-redux'
import { menuIconSontext } from '../../App'
import {NavbarContainer, MenuIcon, CloseIcon, NavLogo, CartBox, Cart} from './NavbarStyle'

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
    
    const {showSideBare, setShowSideBare} = useContext(menuIconSontext)
    return (
        <NavbarContainer>
            <div className="logoAndMenuIcon">
                {
                    showSideBare?
                    <CloseIcon onClick={()=>setShowSideBare(false)} /> :
                    <MenuIcon onClick={()=>setShowSideBare(true)} />
                }
                <NavLogo to='/'>
                    shoping
                </NavLogo>
            </div>
            <CartBox to='/cart'>
                <Cart />
                <span className="count">{totalCartAmount}</span>
            </CartBox>
        </NavbarContainer>
    )
}

export default Navbar
