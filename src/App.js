import './App.css';
import Header from './header/Header'
import Footer from './footer/Footer';
import SliderBanner from './pages/main/sliderBanner/SliderBanner';

function App() {
  return (
    <div className="App">
      <Header/>
      <SliderBanner />
      <Footer />
    </div>
  );
}

export default App;
