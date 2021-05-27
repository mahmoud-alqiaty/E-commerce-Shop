import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {adjustQuantity, removeFromCart} from '../../Redux/Shoping/Actions'

import {CartItemContainer, ImgSide, InfoSide, RemoveIcon} from './CartItemStyle'

const CartItem = ({id, image, title, price, description, qty}) => {
    const [updatedQty, setUpdatedQty] = useState(qty)
    const dispatch = useDispatch()

    const handleUpdateItemQty = (e)=>{
        setUpdatedQty(e.target.value)
        dispatch(adjustQuantity(id, e.target.value))
    }

    return (
        <CartItemContainer>
            <ImgSide src={image} alt={title} />
            <InfoSide>
                <RemoveIcon onClick={()=>dispatch(removeFromCart(id))} />
                <h3>{title}</h3>
                <p className="desc">{description}</p>
                <div className="price">item Price: <span>$ {price}</span></div>
                <label htmlFor="itemQty">Quantitty: </label>
                <input min="1" type="number" name="" id="itemQty" value={updatedQty} onChange={e=>handleUpdateItemQty(e)}/>
            </InfoSide>
        </CartItemContainer>
    )
}

export default CartItem
