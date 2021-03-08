import './App.css';
import Header from './header/Header'
import Footer from './footer/Footer';
import SliderBanner from './pages/main/sliderBanner/SliderBanner';
import Catalog from './pages/catalog/Catalog';


function App() {
  return (
    <div className="App">
      <Header/>
      <Catalog />
      <Footer />
      <SliderBanner />
    </div>
  );
}

export default App;
