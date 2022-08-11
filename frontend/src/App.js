
// import { Router } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './components/pages/pages';

function App() {
  return (
    <Router>
     <Navbar />
     <Routes>
      <Route path="/home" element={<Home/>}/>
     </Routes>
     </Router>
    
  );
}

export default App;
