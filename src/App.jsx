import './index.css';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';



function App() {

  return (
    <>
    <div className='App bg-bg-clr h-full'>
    <Hero/>
    <About/>
    <Contact/>
    <Footer/>
    </div>
    </>
  )
}

export default App
 