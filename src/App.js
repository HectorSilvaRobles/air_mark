import './App.css';
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Services from './components/Services/Services'
import Portfolio from './components/Portfolio/Portfolio'
import Covid from './components/Covid/Covid'
import Clients from './components/Clients/Clients';
import AboutUs from './components/AboutUs/AboutUs';
import Footer from './components/Footer/Footer';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div className="App">
        <Navbar />
        <Hero />
        <Services />
        <Portfolio />
        <Clients />
        <Covid />
        <AboutUs />
        <Footer />
    </div>
  );
}

export default App;
