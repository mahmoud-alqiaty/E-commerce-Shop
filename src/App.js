import './App.css';
import {useEffect} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import Products from './components/Products/Products';
import Product from './components/Products/Product/Product';
import Cart from './components/Cart/Cart';
import Home from './Pages/Home/Home';
import SideBar from './components/sideBar/SideBar';
import { createContext, useState } from 'react';
import Man from './Pages/man/Man';
import Woman from './Pages/woman/Woman';
import Jewelery from './Pages/jewelery/Jewelery';
import Electronics from './Pages/electronics/Electronics';

import{useDispatch, useSelector} from 'react-redux'
import axios from 'axios'
import { setAllProducts } from './Redux/Shoping/Actions';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop';

export const menuIconSontext = createContext()

function App() {
  const dispatch = useDispatch()
  const fetchAllProducts = ()=>{
    axios.get('https://fakestoreapi.com/products')
    .then(res=>{
        dispatch(setAllProducts(res.data))
    })
    .catch(err=> console.log(err.message))
}

useEffect(() => {
    fetchAllProducts()
}, [])

  const [showSideBare, setShowSideBare] = useState(false)
  return (
    <menuIconSontext.Provider value={{showSideBare, setShowSideBare}}>
      <Router>
        <Navbar />
        <SideBar />
        <ScrollToTop />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/allProducts' exact component={Products} />
          <Route path='/man' exact component={Man} />
          <Route path='/woman' exact component={Woman} />
          <Route path='/jewelery' exact component={Jewelery} />
          <Route path='/electronics' exact component={Electronics} />
          <Route path='/cart' exact component={Cart} />
          <Route path='/products/:productId' component={Product} />
        </Switch>
        <Footer />
      </Router>
    </menuIconSontext.Provider>
  );
}

export default App;
