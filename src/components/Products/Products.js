import React, { useEffect } from 'react'
import{useDispatch, useSelector} from 'react-redux'
import axios from 'axios'
import {setAllProducts, addToCart} from '../../Redux/Shoping/Actions'
import {ProductsPage, ProductItem, ProductItemImg, ProductItemInfo} from './ProductsStyle'
import { Link } from 'react-router-dom'

const Products = () => {
    const dispatch = useDispatch()
    const allProducts = useSelector(state => state.shop.products)
    const fetchAllProducts = ()=>{
        axios.get('https://fakestoreapi.com/products')
        .then(res=>{
            dispatch(setAllProducts(res.data))
        })
        .catch(err=> console.log(err.message))
    }

    useEffect(() => {
        fetchAllProducts()
    }, [])

    const handleAddToCart = (itemId)=>{
        dispatch(addToCart(itemId))
    }

    return (
        <ProductsPage>
            {
                allProducts.map(({id, title, price, category, image}) => 
                    <ProductItem key={id}>
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
                                    Add To Cart
                                </span>
                            </div>
                        </ProductItemInfo>
                    </ProductItem>
                )
            }
        </ProductsPage>
    )
}

// const mapStateToProps = (state=>{
//     return{
//         products: state.shop.products
//     }
// })

// const mapDispatchToProps = (dispatch=>{
//     return{
//         setAllProducts: ()=>dispatch(setAllProducts())
//     }
// })


export default Products
