import React, { useEffect } from 'react'
import{useDispatch, useSelector} from 'react-redux'
import ProductItem from '../../components/Products/Product/ProductItem/ProductItem'
import { ProductsPage } from '../../components/Products/Product/ProductItem/ProductItemStyle'



const Jewelery = () => {
    const jeweleryProducts = useSelector(state => state.shop.jeweleryProducts)
    console.log(jeweleryProducts);

    return (
        <ProductsPage>
            <h1>Jewelery</h1>
            {
                jeweleryProducts.map(({id, title, price, category, image})=>
                    <ProductItem key={id} id={id} title={title} price={price} category={category} image={image} />
                )
            }
        </ProductsPage>
    )
}

export default Jewelery
