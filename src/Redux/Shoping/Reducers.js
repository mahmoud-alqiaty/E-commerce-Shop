import * as actionTypes from './Types'

const initState = {
    products: [],
    cart: [],
    currentItem: {},
    homeProducts: [],
    manProducts: [],
    womanProducts: [],
    jeweleryProducts: [],
    electronicsProducts: [],
}

const shopReducer = (state=initState, {type, payload})=>{
    switch (type) {
        case actionTypes.SET_ALL_PRODUCTS :
            // const manClothes = allProducts.filter(({category})=>category==="men's clothing")
            return{
                ...state,
                products: payload,
                manProducts: payload.filter(({category})=>category==="men's clothing"),
                womanProducts: payload.filter(({category})=>category==="women's clothing"),
                jeweleryProducts: payload.filter(({category})=>category==="jewelery"),
                electronicsProducts: payload.filter(({category})=>category==="electronics")
            }
             
        case actionTypes.ADD_TO_CART :
            // determine the item from all-products arry
            const item = state.products.find(product=>product.id === payload.id)

            //check if the item is arready at cart?
            const inCart = state.cart.findIndex(product=>product.id===item.id) 

            return{
                ...state,
                cart: inCart < 0 ? 
                [...state.cart, {...item, qty: 1}] :
                state.cart.map(product=>product.id===payload.id? {...product, qty: product.qty + 1} : {...product})
            }
            
        case actionTypes.ADJUST_QUANTITY:
            return{
                ...state,
                cart: state.cart.map(product=>product.id===payload.id? {...product, qty: payload.quantity} : {...product})
            }
            
        case actionTypes.REMOVE_FROM_CART :
            return{
                ...state,
                cart: state.cart.filter(product => product.id !== payload.id)
            }

        case actionTypes.SHOW_ITEM_DETAILS:
            return{
                ...state,
                currentItem: {...state.products.find(({id})=> id === payload.id)}
            }
            
        default:
           return state
    }
}

export default shopReducer;