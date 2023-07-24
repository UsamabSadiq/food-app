import './App.css';
import Contact from './components/Contact';
import Employer from './components/Employer';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Intro from './components/Intro';
import Navbar from './components/Navbar';
import RecentProject from './components/RecentProject';
import Services from './components/Services';


function App() {
  return (
    <div className="App">
      <div className="max-w-[1440px] mx-auto ">

        <Navbar />
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
