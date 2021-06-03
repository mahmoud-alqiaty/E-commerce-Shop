import React, { useEffect } from 'react'
import{useDispatch, useSelector} from 'react-redux'
import ProductItem from '../../components/Products/Product/ProductItem/ProductItem'
import { ProductsPage } from '../../components/Products/Product/ProductItem/ProductItemStyle'



const Electronics = () => {
    const electronicsProducts = useSelector(state => state.shop.electronicsProducts)
    console.log(electronicsProducts);

    return (
        <ProductsPage>
            <h1>electronics</h1>
            {
                electronicsProducts.map(({id, title, price, category, image})=>
                    <ProductItem key={id} id={id} title={title} price={price} category={category} image={image} />
                )
            }
        </ProductsPage>
    )
}

export default Electronics
