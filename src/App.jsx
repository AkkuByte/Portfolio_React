import './index.css';
import Navbar from './components/UI/navbar'
import Footer from './components/section/footer'
import Hero from './components/section/hero'
import Hoverbar from './components/UI/hoverbar';
import Project from './components/section/project';
function App() {
  return (
  <>
    <Navbar />
    <Hero/>
    <Project/>
    <Hoverbar/>
    <Footer/>
  </>
  );
}

export default App;