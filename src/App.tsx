import Header from './components/Header';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import Services from './components/Services';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[var(--bg-color)] text-[var(--text-primary)]">
      <Header />
      <main>
        <Hero />
        <TechStack />
        <Services />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
