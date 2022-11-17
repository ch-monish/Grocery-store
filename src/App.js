import logo from './logo.svg';
import './App.css';
import HomePage from './pages/homePage';
import ProductPage from './pages/productPage';
import ProductDetailPage from './pages/productDetailPage';
import CartPage from './pages/CartPage'; 
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import ErrorPage from './pages/ErrorPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/contactPage';
function App() {
  return (
    // <div className="App">
    // {/* <HomePage></HomePage> */}
    // <ProductPage></ProductPage>
    // {/* <ProductDetailPage> </ProductDetailPage> */}
    // </div>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/products/:catId" element={<ProductPage/>}/>
        <Route path="/products/details/:_id" element={<ProductDetailPage/>}/>
        <Route path="/register" element={<RegisterPage></RegisterPage>}/>
      <Route path='/login' element={<LoginPage></LoginPage>}/>
      <Route path='/cart' element={<CartPage></CartPage> }/>
      <Route path='/about' element={<AboutPage></AboutPage> }/>
      <Route path='/contact' element={<ContactPage></ContactPage> }/>
      <Route path='*' element={<ErrorPage></ErrorPage> }/>
      </Routes>
    </Router>
  );
}

export default App;
