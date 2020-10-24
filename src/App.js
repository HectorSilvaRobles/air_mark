import './App.css';
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Services from './components/Services/Services'
import Portfolio from './components/Portfolio/Portfolio'
import Clients from './components/Clients/Clients';
import AboutUs from './components/AboutUs/AboutUs';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Hero />
        <Services />
        <Portfolio />
        <Clients />
        <AboutUs />
        <Footer />
    </div>
  );
}

export default App;
