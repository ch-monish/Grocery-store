import { ActionTypes} from '../constants/action.types'

export const addtocart=(product)=>{
    return{
        type:ActionTypes.ADD_TO_CART,
        payload:product
    }
}
export const removefromcart=(product)=>{
    return{
        type:ActionTypes.REMOVE_FROM_CART,
        payload:product
    }
}
export const increasequantity=(product)=>{
    return{
        type:ActionTypes.INCREASE_QUNANTITY,
        payload:product
    }
}
export const decreasequantity=(product)=>{
    return{
        type:ActionTypes.DECREASE_QUNANTITY,
        payload:product
    }
}