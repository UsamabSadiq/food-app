import { useState } from 'react';
import './App.css';
import Contact from './components/Contact';
import Employer from './components/Employer';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Intro from './components/Intro';
import Navbar from './components/Navbar';
import RecentProject from './components/RecentProject';
import Services from './components/Services';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init({
  once: false,

  offset: 300,
  duration: 1000

});


function App() {
  const [mode, setMode] = useState({
    color: 'white',
    backgroundColor: 'black'
  })

  // const [iconstate, setIconstate] = useState(true)

  const modeHandler = () => {
    // console.log('mode Change working');
    if (mode.color === 'white') {
      setMode({
        color: 'black',
        backgroundColor: 'white'
      })
    } else {
      setMode({
        color: 'white',
        backgroundColor: 'black'
      })
    }
  }
  return (
    <div className={"App"} style={mode}>
      <div className="max-w-[1440px] mx-auto ">

        <Navbar modeChange={modeHandler} iconset={mode} />
        <Intro />
        <Services />
        <Experience />
        <Employer />
        <RecentProject />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
