import './App.css';
import Navbar from './Components/Navbar';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import ProjectsPage from './Pages/ProjectsPage';

function App() {
  return (
    <Router>
      <title>Evren Keskin</title>
      <Navbar />
      <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/works" element={<ProjectsPage />} />
           <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
}

export default App;

// Resources used in reference:
// https://www.geeksforgeeks.org/how-to-create-a-multi-page-website-using-react-js/
// https://www.geeksforgeeks.org/how-to-create-tabs-in-reactjs/