import { ActionTypes } from '../constants/action.types'
import store from '../../../redux/store'
import { decreasequantity, removefromcart } from '../actions/product.action'

const initialcartstate = {
    productcart: [

    ]
}
export const cart = (state = initialcartstate, { type, payload }) => {
    switch (type) {
        case ActionTypes.ADD_TO_CART:
            // console.log(payload)
            let count = 0
            const state3 = state
            state.productcart.forEach(e => {
                if (e._id == payload._id)
                    count = +1

            });
            // console.log(count)
            if (count > 0) {
                // console.log(count)
                return state
            }

            else {
                let statetemp = state
                payload.ordered = 1
                statetemp.productcart.push(payload)

                return statetemp
                // return state
            }






        case ActionTypes.REMOVE_FROM_CART:
            // let state1;
            // state.productcart.forEach(e => {
            //     if (e.id == payload.id)
            //         state1 = state.filter(item => item !== e)

            // });
            // state = state1
            // return state
            // console.log("deleting")
            let state4 = state
            var afterdel = state4.productcart.filter(item => item._id != payload._id)
            // state.productcart=afterdel
            // console.log(afterdel)
            state.productcart = afterdel
            return { productcart: [...afterdel] }










        case ActionTypes.INCREASE_QUNANTITY:
            // console.log("increase q")
            // state.productcart.forEach(e => {
            //     if (e._id == payload._id){
            //         console.log(e._id)
            //         e.ordered!=null?e.ordered = e.ordered + 1:e.ordered=1}
            // });
            // return {state}
            let state5 = state.productcart
            state5.forEach((e) => {
                if (e._id == payload._id) {
                    // console.log(e._id)
                    e.ordered != null ? e.ordered = e.ordered + 1 : e.ordered = 1
                }
            });

            return { productcart: [...state5] }











        case ActionTypes.DECREASE_QUNANTITY:
            // console.log("decrease q")
            // state.productcart.forEach(e => {
            //     if (e._id == payload._id) {
            //         console.log(e._id)
            //         if (e.ordered == 1) {
            //             console.log("only one")
            //             store.dispatch(removefromcart(payload))
            //             removefromcart(payload)
            //         }
            //         else
            //             e.ordered != null ? e.ordered = e.ordered - 1 : e.ordered = 1
            //     }
            // });
            // return state

            let state6 = state.productcart
            state6.forEach((e) => {
                if (e._id == payload._id) {
                    // console.log(e._id)
                    e.ordered >= 2 ? e.ordered = e.ordered - 1 : store.dispatch(removefromcart(payload))
                    // if(e.ordered<2) {removefromcart(payload)}
                }
            });
            return { productcart: [...state6] }




        default:
            return state
    }

}