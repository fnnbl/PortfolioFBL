import "./App.css";
import Hero from "./sections/Hero/Hero";
import CVSection from "./sections/CVSection/CVSection";
import Skills from "./sections/Skills/Skills";
import Languages from "./sections/Languages/Languages";
import Projects from "./sections/Projects/Projects";
import Contact from "./sections/Contact/Contact";
import Footer from "./sections/Footer/Footer";
import ScrollNav from "./common/ScrollNav";
import SiteHeader from "./common/SiteHeader";

function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <SiteHeader />
      <ScrollNav />
      <main id="main">
        <Hero />
        <CVSection />
        <Skills />
        <Languages />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
