import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Login from './pages/Login';
import AdminDashboard from './pages/AdminDashboard';
import EngineerDashboard from './pages/EngineerDashboard';
import Engineer from './pages/Engineer';
import Projects from './pages/Projects';
import Assignment from './pages/Assignment';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/admin-dashboard' element={<AdminDashboard />} />
        <Route path='/engineer-dashboard' element={<EngineerDashboard />} />
        <Route path='/engineers' element={<Engineer />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/assignments' element={<Assignment />} />
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
