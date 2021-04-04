
import s from './App.scss';
import Header from './header/Header';
import Catalog from './pages/catalog/Catalog';
import Footer from './footer/Footer';
import Main from "../src/pages/main/Main"
import Product from './pages/product/Product';
import { BrowserRouter, Route } from 'react-router-dom';
import BurgerMenu from './components/burgerMenu/BurgerMenu';






function App() {
      return (
            <BrowserRouter>
                  <div className="App">
                        <div className='mainWrap'>
                              <Header />
                              <Route 
                              exact
                              path="/"
                              component = {Main}/>
                              <Route  path = '/hydroCatalog' component = {Catalog}/>
                              <Route path = '/product' component = {Product}/>
                        </div>
                        <Footer />
                  </div>
            </BrowserRouter>
      );
}

export default App;
