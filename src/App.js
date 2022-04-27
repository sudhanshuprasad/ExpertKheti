import Home from './components/Home.js';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Profile from './components/Profile.js';
import About from './components/About.js';
import Topbar from './components/Topbar.js';
import Login from './components/Login.js';
import Contactus from './components/Contactus.js';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import Dashboard from './components/Dashboard.js';
import Plan from './components/Plan.js';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCI9PjIrMKAUjE-i5frjf-LSgq7SVdS9zo",
  authDomain: "expertkheti.firebaseapp.com",
  projectId: "expertkheti",
  storageBucket: "expertkheti.appspot.com",
  messagingSenderId: "322762089788",
  appId: "1:322762089788:web:b75f951b7560491138ea39",
  measurementId: "G-67K5HKSCE2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Topbar/>
        <Routes>
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
