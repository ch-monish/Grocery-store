import React from 'react'
import CategoryList from '../../components/categoryList'
import Header from '../../components/Header'
import NavBar from '../../components/NavBar'

function HomePage() {
  return (
    <div>
        <NavBar></NavBar>
        <Header></Header>
        <div className='container'>
<CategoryList></CategoryList>
        </div>
    </div>
  )
}

export default HomePage