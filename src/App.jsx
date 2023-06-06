import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas} from "./components";
import Footer from './components/Footer';
import Services from "./components/Services";
import Map from "./components/Map";

import Aos from 'aos';
import { useEffect } from "react";
import VisionMission from "./components/VisionMission";
import Centerinfo from "./components/Centerinfo";

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 2500,
      delay: 400,
    });
  });
  return (
    <BrowserRouter>
      <div className=' z-0 bg-primary'>
        <div className='lg:bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <Centerinfo/>
        <About />
        <VisionMission/>
        <Services/>
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className='relative'>
          <Contact />
          <StarsCanvas />
          
        </div>
        <Map />
        <Footer />
      </div>
      
    </BrowserRouter>
  );
}

export default App;
