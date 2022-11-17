import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import NavBar from '../../components/NavBar'
import { addtocart, decreasequantity, increasequantity, removefromcart } from '../../redux/module/actions/product.action'

function CartPage() {
    const productsfromcart = useSelector((state) => state.cart.productcart)
    const dispatch = useDispatch()
    // useState(()=>{

    // }[procuctsfrom])
    return (
        <div>
            <NavBar></NavBar>
            {console.log("rerendering")}
            <br />
            <div className='container'>
                {productsfromcart.length == 0 ? <>


                    <h2>Cart is empty</h2>
                    <Link to="/"> Explore Categories</Link>
                </> : <>
                <div className="row">
<div className="col"><h2>{productsfromcart.length} Product{productsfromcart.length > 1 && "s"} added to Cart</h2></div>
<div className="col"> <p style={{color:"blue"}}>Total Price - &#8377;{productsfromcart.reduce( (result, item) =>{
                        return result + (item.price*item.ordered);
                    }, 0)
                }</p></div>
                    
                   
                </div>
                    <Link to="/"> Contine shopping </Link><br />

                </>}
                <div className="row">
                    {productsfromcart.map((product) => <div className="col-lg-3 card ml-2 mr-2 mb-2 mt-2" >
                        <h5>{product.productName}</h5><button className='btn btn-warning' onClick={e => dispatch(removefromcart(product))}>Remove Item</button><br />
                       <div style={{height:"190px"}}>

                        <p>{product.description}</p>
                        <p> Price - &#8377;{product.price}</p>
                       </div>
                        <div className="row mb-2 ml-1" style={{bottom:"10px"}}>
                            <div className="col"> <button className='btn btn-warning' onClick={e => dispatch(increasequantity(product))}>+</button></div>
                            <div className="col text-centered">
                              Qty : {product.ordered}
                            </div>
                            <div className="col"><button className='btn btn-warning' onClick={e =>
                                product.ordered > 1 ?
                                    dispatch(decreasequantity((product))) :
                                    dispatch(removefromcart((product)))}>-</button></div>
                        </div>
                    </div>)
                    }
                </div>
            </div>
            <br />
        </div>
    )
}

export default CartPage