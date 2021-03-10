import './App.css';
import Header from './header/Header';
import Catalog from './pages/catalog/Catalog';
import Footer from './footer/Footer';
import Main from "../src/pages/main/Main"
import Product1 from './pages/product/Product';



function App() {
      return (
      <div className="App">
      <Catalog/>
      <Header/>
      <Main/>
      <Footer />
      <Product1 />
      </div>
      );
}

export default App;
