import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Endpoints from '../../api/Endpoints';
import Product from './Product';
function ProductList() {
    const [products,setproducts]=useState([])
    const {catId}=useParams();
    const fetchdata=()=>{
        axios.get(Endpoints.PRODUCT_BY_CATID+catId)
        .then(res=>setproducts(res.data.data))
        .catch(err=>console.log(err))
    }
    useEffect(()=>{
        fetchdata()
    },[])
  return (

    <div>

        <h2 className="text-center row">All Products</h2>
      <div className="row">

        {products.map((i)=>
        <Product data={i}></Product>
        
        
        )}
      </div>

    </div>
  )
}

export default ProductList