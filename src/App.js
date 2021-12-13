import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import Students from './components/Students';
import NewStudent from './components/NewStudent';
import Groups from './components/Groups';
import NewGroup from './components/NewGroup';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/students" element={<Students />} />
        <Route path="/newStudent" element={<NewStudent />} />
        <Route path="/groups" element={<Groups />} />
        <Route path="/newGroup" element={<NewGroup />} />
      </Routes>
    </Router>
  );
}

export default App;
