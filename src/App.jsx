import { BrowserRouter } from "react-router-dom";
import { useEffect } from 'react'

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

//setting up google analytics

import ReactGA from "react-ga"

//

const TRACKING_ID = import.meta.env.VITE_APP_TRACKING_ID //Tracking ID
ReactGA.initialize(TRACKING_ID);

// app

const App = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  })

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Works />
        {/* <Feedbacks /> */}
        <div className='relative z-0'>
          <Tech />
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  ); 
}

export default App;
