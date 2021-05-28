import React from 'react'
import{useSelector} from 'react-redux'
import ProductItem from './Product/ProductItem/ProductItem'
import { ProductsPage } from './Product/ProductItem/ProductItemStyle'

const Products = () => {
    const allProducts = useSelector(state => state.shop.products)   
    return (
        <ProductsPage>
            {
                allProducts.map(({id, title, price, category, image}) => 
                <ProductItem key={id} id={id} title={title} price={price} category={category} image={image} /> )
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
