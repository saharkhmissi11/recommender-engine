import logo from './logo.svg';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './Login/Login';
import Register from './Register/Register';
import Home from './Home/Home';

function App() {
  return (
    <div >
       <BrowserRouter>
    <div className="App">
     <Routes>
     <Route path="/login" element={<Login/>} />
     <Route path="/home" element={<Home/>} />
     <Route path="/register" element={<Register/>} />
     
    </Routes>
      
    </div>
   
    </BrowserRouter>
      
    </div>
  );
}

export default App;
