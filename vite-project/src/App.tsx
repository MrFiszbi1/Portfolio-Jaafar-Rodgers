import "./assets/css/PortfolioStyles.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import AboutMePage from "./pages/AboutMePage";
import ContactMePage from "./pages/ContactMePage";
import ProjectsPage from "./pages/ProjectsPage";
import ResumePage from "./pages/ResumePage";


function App() {
  return (
    <BrowserRouter>
    <div className="portfolioStyle">
      <Routes>
        <Route path="/" element={<AboutMePage />}></Route>
        <Route path="/Resume" element={<ResumePage />}></Route>
        <Route path="/Projects" element={<ProjectsPage />}></Route>
        <Route path="/Contact" element={<ContactMePage />}></Route>
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
