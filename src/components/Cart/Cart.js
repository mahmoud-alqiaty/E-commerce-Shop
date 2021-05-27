import React, { useEffect, useState } from 'react'
import {useSelector} from 'react-redux'
import CartItem from './CartItem'
import {CartContainer, CartSummary} from './CartStyle'


const Cart = () => {
    const cart = useSelector(state => state.shop.cart)

    const [totalCartAmount, setTotalCartAmount] = useState(0)
    const [totalCartPrice, setTotalPrice] = useState(0)
    var totalAmount = 0 
    var totalPrice = 0
    useEffect(() => {
        cart.forEach(el=>{
            totalAmount += el.qty
            totalPrice = totalPrice + (el.qty * el.price)
        })
        setTotalCartAmount(totalAmount)
        setTotalPrice(+totalPrice.toFixed(2))
    }, [cart])
   

    return (
        <CartContainer>
            <CartSummary>
                <h1>cart summary</h1>
                <div className="total_price_amount">
                    <p className="totalAmount">
                        <span>Total Items: </span>({totalCartAmount})
                    </p>
                    <p className="totalPrice">
                        <span>Total Price: </span> $ {totalCartPrice}
                    </p>
                </div>
                <span className="proced_btn">
                    proced to ckeckout
                </span>
            </CartSummary>
            
            {
                cart.map((item, id)=>
                    <CartItem 
                        key={id}
                        id={item.id}
                        image={item.image}
                        title={item.title}
                        price={item.price}
                        description={item.description}
                        qty={item.qty}
                    />
                )
            }
            
        </CartContainer>
    )
}

export default Cart
