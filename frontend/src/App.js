
// import { Router } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './components/pages/pages';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';

function App() {
  return (
    <Router>
     <Navbar />
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/sign-up" element={<Signup/>}/>
      <Route path="/login" element={<Login/>}/>
     </Routes>
     </Router>
    
  );
}

export default App;
