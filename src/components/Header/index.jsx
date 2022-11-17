import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
   


<div className="jumbotron text-center " style={{backgroundColor:"rgb(239, 236, 145) "}}>
  <h1 className="display-4">Hello, {localStorage.getItem("user")?JSON.parse(localStorage.getItem('user')).firstName:"customer!"}</h1>
  <p className="lead">Welcome User to grocery app your one stop shop for all your grocery needs </p>
  <p>{localStorage.getItem("user")?"Logged In With Email - "+JSON.parse(localStorage.getItem('user')).email:""} </p>
  <hr className="my-4"/>
  {/* <p>It uses utility classNamees for typography and spacing to space content out within the larger container.</p> */}
  <Link to="/cart" className="btn btn-primary btn-lg" href="#" role="button">Checkout Cart</Link>
</div>
  )
}

export default Header