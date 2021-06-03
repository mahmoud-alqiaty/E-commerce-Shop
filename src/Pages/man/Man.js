import React, { useEffect } from 'react'
import{useDispatch, useSelector} from 'react-redux'
import ProductItem from '../../components/Products/Product/ProductItem/ProductItem'
import { ProductsPage } from '../../components/Products/Product/ProductItem/ProductItemStyle'



const Man = () => {
    const manProducts = useSelector(state => state.shop.manProducts)
    console.log(manProducts);

    return (
        <ProductsPage>
            <h1>man's clothes</h1>
            {
                manProducts.map(({id, title, price, category, image})=>
                    <ProductItem key={id} id={id} title={title} price={price} category={category} image={image} />
                )
            }
        </ProductsPage>
    )
}

export default Man
