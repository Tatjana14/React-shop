import './App.css';
import Header from './header/Header'
import Catalog from './pages/catalog/Catalog';
import Footer from './footer/Footer';
import SliderBanner from './pages/main/sliderBanner/SliderBanner';



function App() {
  return (
    <div className="App">
      <Header/>
      <Catalog />
      {/* <SliderBanner /> */}
      <Footer />
    </div>
  );
}

export default App;
