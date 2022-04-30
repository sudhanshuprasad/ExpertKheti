import Home from './components/Home.js';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Profile from './components/Profile.js';
import About from './components/About.js';
import Topbar from './components/Topbar.js';
import Login from './components/Login.js';
import Contactus from './components/Contactus.js';
import Dashboard from './components/Dashboard.js';
import Plan from './components/Plan.js';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Topbar/>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/procedure' element={<Home />}></Route>
          <Route path='/requirment' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/profile' element={<Profile />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/contactus' element={<Contactus />}></Route>
          <Route path='/dashboard' element={<Dashboard />}></Route>
          <Route path='/plan/:cropname' element={<Plan />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
