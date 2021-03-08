import './App.css';
import Header from './header/Header'
import Catalog from './pages/catalog/Catalog';
import Footer from './footer/Footer';
import SliderBanner from './pages/main/sliderBanner/SliderBanner';
import Main from "../src/pages/main/Main"



function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Footer />
    </div>
  );
}

export default App;
