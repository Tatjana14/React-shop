
import s from './App.scss';
import Header from './header/Header';
import Catalog from './pages/catalog/Catalog';
import Footer from './footer/Footer';
import Main from "../src/pages/main/Main"
import Product from './pages/product/Product';






function App() {
      return (
      <div className="App">
            <div className='mainWrap'>
            <Header/>
            <Main/> 
            <Catalog/>
            <Product />
            </div>
            <Footer/>
      </div>
      );
}

export default App;
