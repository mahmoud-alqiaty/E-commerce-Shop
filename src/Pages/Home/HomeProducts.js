import React from 'react'
import{useSelector} from 'react-redux'
import ProductItem from '../../components/Products/Product/ProductItem/ProductItem'
import { ProductsPage } from '../../components/Products/Product/ProductItem/ProductItemStyle'

const HomeProducts = () => {
    const homeProducts = useSelector(state => state.shop.homeProducts)
    return (
        <ProductsPage>
            {
                homeProducts.map(({id, title, price, category, image})=>
                    <ProductItem key={id} id={id} title={title} price={price} category={category} image={image} />
                )
            }
        </ProductsPage>
    )
}

export default HomeProducts
