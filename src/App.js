import "./App.css";
import Header from "./components/Header";
import Projects from "./components/Projects/Projects";
import Main from "./components/Main/Main";
import Footer from "./components/Footer";
import DesignProcess from "./components/DesignProcess/DesignProcess";

function App() {
  return (
    <div className="App" id="home">
      <Header />
      <div>
        <Main />
        <Projects />
        <DesignProcess />
      </div>
      <Footer />
    </div>
  );
}

export default App;
