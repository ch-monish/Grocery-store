import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Constants from '../../api/constants'
import Category from './Category'
import Endpoints from '../../api/Endpoints'
function CategoryList() {
    const [products, setProducts] = useState([])
    useEffect(() => {
        axios.get(Endpoints.CATEGORY_URL).then(res => setProducts(res.data.data)).catch(err => console.log(err))
    },[])
    return (
        <div>
            <h1>Category list</h1>
            <br />
            <div className="row">

                {/* {
                    products.map((i) => <div className='col md-4'>
                        <div>
                            <img src={i.catImage}></img>
                            {i.catId}



                        </div>





                    </div>)
                } */}
                {
                    products.map((i)=><Category data={i}></Category>)
                }
                    
            </div>


        </div>
    )
}

export default CategoryList
