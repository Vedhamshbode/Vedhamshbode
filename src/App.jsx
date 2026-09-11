import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Competitions from "./components/Competitions";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// The nav only surfaces 5 top-level stops (Home, Projects, Competitions,
// Blogs, Contact), but Home itself is made up of a few stacked sections
// (Hero -> About -> Experience) that scroll past on the way down.
export default function App() {
  return (
    <div className="font-body">
      <Nav />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Competitions />
      <Blogs />
      <Contact />
      <Footer />
    </div>
  );
}
