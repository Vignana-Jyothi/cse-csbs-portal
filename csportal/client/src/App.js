import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Project1 from './components/project1/index';
import Project2 from './components/project2/index';

function App() {
  return (
    <div>
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/project1/*" element={<Project1 />} />
                <Route path="/project2/*" element={<Project2 />} />
            </Routes>
        </Router>
    </div>
  );
}

export default App;
