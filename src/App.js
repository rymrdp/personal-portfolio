import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Experience from "./components/Experience/Experience";
import Contact from "./components/Contact/Contact";
import ScrollToTop from "react-scroll-to-top";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <About />
      <Projects />
      <Experience />
      <Contact />
      <ScrollToTop smooth color="#0096FF" />
      <Footer />
    </div>
  );
}

export default App;
