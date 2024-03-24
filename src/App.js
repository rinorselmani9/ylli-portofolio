import "./App.scss";
import Header from "./components/Header/Header";
import Projects from "./components/Projects/Projects";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import DesignProcess from "./components/DesignProcess/DesignProcess";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="App" id="home">
      <Header />
      <div>
        <Main />
        {/* <Projects /> */}
        {/* <DesignProcess /> */}
        {/* <Contact/> */}
      </div>
      <Footer />
    </div>
  );
}

export default App;
