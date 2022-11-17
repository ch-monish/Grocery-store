import React from 'react'
import NavBar from '../../components/NavBar'
import ProductList from '../../components/ProductList'
import SubCategory from '../../components/SubCategory'

function ProductPage() {
  return (
    <div>
       <NavBar></NavBar>
       <div className="container">
        <div className="row">
            <div className="col-lg-3"><SubCategory></SubCategory></div>
            <div className="col-lg-9"><ProductList></ProductList></div>
        </div>
       </div>
       
       
    </div>
  )
}

export default ProductPage