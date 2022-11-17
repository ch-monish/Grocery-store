import React from 'react'
import NavBar from '../../components/NavBar'

function ErrorPage() {
  return (
    <>
    <NavBar></NavBar>
    <div className='container'>
        <div className="text-centered">

        {/* <h1>Error Page</h1> */}
        <h1 className='text-centered'> Page not found</h1>
        </div>
    </div>
    </>
  )
}

export default ErrorPage