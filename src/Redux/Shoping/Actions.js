import * as actionTypes from './Types'

export const setAllProducts = (fetchedProducts)=>{
    return{
        type: actionTypes.SET_ALL_PRODUCTS,
        payload: fetchedProducts
    }
}

export const addToCart = (itemId)=>{
    return{
        type: actionTypes.ADD_TO_CART,
        payload: {id: itemId}
    }
}


export const adjustQuantity = (itemId, value)=>{
    return{
        type: actionTypes.ADJUST_QUANTITY,
        payload: {id: itemId, quantity: +value}
    }
}

export const removeFromCart = (itemId)=>{
    return{
        type: actionTypes.REMOVE_FROM_CART,
        payload: {id: itemId}
    }
}

export const showItemDetails = (itemId)=>{
    return{
        type: actionTypes.SHOW_ITEM_DETAILS,
        payload: {id: +itemId}
    }
}
