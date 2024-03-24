import Header from "./components/Header/Header";
import Projects from "./components/Projects/Projects";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import "./App.scss";

function App() {
  return (
    <Router>
      <div className="App" id="home">
        <Header />
        <div>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
