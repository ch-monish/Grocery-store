import React from 'react'
import { Link } from 'react-router-dom'
import Constants from '../../../api/constants'
import './styles.css'
function Product(props) {
    const {_id,productName,price,mrp,image,description}=props.data
  return (
    <div className="card col-sm-6 card">
      <br />
    <img src={Constants.IMAGE_URL+image} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{productName}</h5>
      <p className="card-text">{description}</p>
    
    <span>
        
        <h2>
        <del className='text-secondary'> &#8377;{mrp}</del>
        &#8377;     
{price}
        </h2>
    </span>
    <Link to={"/products/details/"+_id} className="btn btn-primary fluid">View Detials</Link>
    </div>
  </div>
  )
}

export default Product