import React from 'react'
import { Link } from 'react-router-dom'
import Constants from '../../../api/constants'
function Category(props) {
    // console.log(props.data)
    const { catDescription, catId, catImage, catName, position, slug, status__v, _id } = props.data
    return (
       

            <div className="col-sm-3">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{catId}.{catName}</h5>
                        <img src={Constants.IMAGE_URL+catImage} className="card-img-top" alt="../"></img>
                        <p className="card-text">{slug}</p>
                        <Link  to={'/products/'+catId} className="btn btn-primary btn-block">Explore more</Link>
                    </div>
                </div>
            </div>

)
}

export default Category