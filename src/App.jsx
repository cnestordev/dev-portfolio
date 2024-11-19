import "./App.css";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { Skills } from "./components/skills/Skills";
import { Experience } from "./components/experience/Experience";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Skills />
      <Experience />
    </>
  );
}

export default App;
