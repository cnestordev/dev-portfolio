import "./App.css";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { Skills } from "./components/skills/Skills";
import { Experience } from "./components/experience/Experience";
import { Project } from "./components/project/Project";
import { About } from "./components/About";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Skills />
      <Experience />
      <Project />
      <About />
      <Footer />
    </>
  );
}

export default App;
