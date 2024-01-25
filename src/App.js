import AboutUs from './AboutUs/AboutUs';
import Chef from './Chef/Chef';
import FindUs from './FindUs/FindUs';
import Footer from './Footer/Footer';
import Gallery from './Gallery/Gallery';
import Header from './Header/Header';
import Intro from './Intro/Intro';
import NavBar from './NavBar/NavBar';
import Special from './Special/Special';
import Laurels from './Laurels/Laurels';

import './App.css';

function App() {
  return (
    <div>
      <NavBar/>
      <Header/>
      <AboutUs/>
      <Special/>
      <Chef/>
      <Intro/>
      <Laurels/>
      <Gallery/>
      <FindUs/>
      <Footer/>
    </div>
  );
}

export default App;
