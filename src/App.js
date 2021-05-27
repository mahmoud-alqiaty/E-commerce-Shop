import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import Products from './components/Products/Products';
import Product from './components/Products/Product/Product';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Products} />
        <Route path='/cart' exact component={Cart} />
        <Route path='/products/:productId' component={Product} />
      </Switch>
    </Router>
  );
}

export default App;
