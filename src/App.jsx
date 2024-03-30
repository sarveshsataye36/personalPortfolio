import "./assets/css/animate.min.css";
import "./assets/css/app.css";
import "./assets/css/bootstrap.min.css";
import "./assets/css/color.css";
import "./assets/css/owl.carousel.min.css";
import "./assets/css/magnific-popup.css";
import "./assets/css/owl.theme.default.min.css";
import Navbar from "./components/Navbar";
import PreLoader from "./components/PreLoader";
import HeroBanner from "./components/HeroBanner";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import PersonalProjects from "./components/PersonalProjects";
import Resume from "./components/Resume";
import Facts from "./components/Facts";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import TopScroller from "./components/TopScroller";
function App() {
  return (
    <>
      <PreLoader />
      <Navbar />
      <HeroBanner />
      <AboutMe />
      <Skills />
      <PersonalProjects />
      <Resume />
      <Facts />
      <Contact />
      <Footer />
      <TopScroller />
    </>
  );
}

export default App;
