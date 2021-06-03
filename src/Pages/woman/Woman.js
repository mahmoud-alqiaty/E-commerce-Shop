import React, { useEffect } from 'react'
import{useDispatch, useSelector} from 'react-redux'
import ProductItem from '../../components/Products/Product/ProductItem/ProductItem'
import { ProductsPage } from '../../components/Products/Product/ProductItem/ProductItemStyle'



const Woman = () => {
    const womanProducts = useSelector(state => state.shop.womanProducts)
    console.log(womanProducts);

    return (
        <ProductsPage>
            <h1>woman's clothes</h1>
            {
                womanProducts.map(({id, title, price, category, image})=>
                    <ProductItem key={id} id={id} title={title} price={price} category={category} image={image} />
                )
            }
        </ProductsPage>
    )
}

export default Woman
