import React from 'react'
import { Link } from 'react-router-dom'
import{useDispatch, useSelector} from 'react-redux'


import {ProductItemContainer, ProductItemImg, ProductItemInfo, AddCartIcon} from './ProductItemStyle'
import {setAllProducts, addToCart} from '../../../../Redux/Shoping/Actions'


const ProductItem = ({id, title, price, category, image}) => {
    const dispatch = useDispatch()

    const handleAddToCart = (itemId)=>{
        dispatch(addToCart(itemId))
    }
    return (
        <ProductItemContainer>
            <ProductItemImg src={image} alt={title} />
            <ProductItemInfo>
                <div className="title">{title}</div>
                <div className="price">$ {price}</div>
                <div className="category">{category}</div>
                <div className="btns">
                    <Link 
                        className="showDetails-Btn"
                        to={`/products/${id}`}
                    >
                        Show details
                    </Link>
                    <span 
                        className="addToCart-Btn" 
                        onClick={()=>handleAddToCart(id)}
                    >
                        <AddCartIcon />
                    </span>
                </div>
            </ProductItemInfo>
        </ProductItemContainer>

    )
}

export default ProductItem
