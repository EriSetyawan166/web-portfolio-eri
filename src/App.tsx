import { useEffect } from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Work from './components/Work';
import Approach from './components/Approach';
import Education from './components/Education';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { initMotion } from './motion';

function App() {
  useEffect(() => initMotion(), []);

  return (
    <div className="page">
      <Nav />
      <main className="page" style={{ padding: 0 }}>
        <Hero />
        <About />
        <Services />
        <Work />
        <Approach />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
