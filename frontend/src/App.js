import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
import Footer from './components/Footer';
import DesignAndConstruction from "./pages/DesignAndConstruction";
import SpaceManagement from "./pages/SpaceManagement";
import ProjectRequest from "./pages/ProjectRequest";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <>
      <Router>
        <div className="container">
          <Header />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/design" element={<DesignAndConstruction />} />
            <Route path="/space" element={<SpaceManagement />} />
            <Route path="/request" element={<ProjectRequest />} />
          </Routes>
          <Footer />
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
