import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import "./App.scss";
import ProjectsPage from "./Pages/Projects/ProjectsPage";
import ContactPage from "./Pages/Contact/ContactPage";
import HomePage from './Pages/Home/HomePage'

function App() {
  return (
    <Router>
      <div className="App" id="home">
        <Header />
        <div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
