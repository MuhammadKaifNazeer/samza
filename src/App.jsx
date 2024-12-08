import Hero from "./components/Hero";
import Summarizer from "./components/Summarizer";
import "./App.css";
const App = () => {
  return (
    <main>
      <div className="main">
        <div className="gradient"></div>
      </div>

      <div className="app">
        <Hero />
        <Summarizer />
      </div>
    </main>
  );
};

export default App;
