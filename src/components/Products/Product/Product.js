import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router'
import {addToCart, showItemDetails} from '../../../Redux/Shoping/Actions'

import {ProductPageContainer, ProductItemContainer, ImgSide, BorderLine, InfoSide} from './ProductStyle'
import {AddCartIcon} from './ProductStyle'

const Product = () => {
    // const products = useSelector(state => state.shop.products)
    const currentItem = useSelector(state => state.shop.currentItem)
    const dispatch = useDispatch()

    const {productId} = useParams()

    useEffect(() => {
        dispatch(showItemDetails(productId))

    }, [productId])

    const {image, title, description, price, id, category} = currentItem

    console.log(currentItem);


    return (
        <ProductPageContainer>
            <ProductItemContainer>
                <ImgSide src={image} alt={title} />
                <BorderLine />
                <InfoSide>
                    <h1>{title}</h1>
                    <p className="desc">{description}</p>
                    <p className="category">{category}</p>
                    <p className="price">$ {price}</p>
                    <span 
                        className="addToCart-Btn" 
                        onClick={()=>dispatch(addToCart(id))}
                    >
                        <AddCartIcon />
                    </span>
                </InfoSide>
            </ProductItemContainer>
        </ProductPageContainer>
    )
}

export default Product
