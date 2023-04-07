import logo from './logo.svg';

import { Route, Routes } from 'react-router-dom';

import Header from './Components/Header';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Ptustb from './Components/Ptustb';
import Upevents from './Components/Upevents';
import Offbrs from './Components/Offbrs';
import Wie from './Components/Wie';
import Home from './Components/Home';
import Annualr from './Components/Annualr';
import Gallery from './Components/Gallery';
import Contact from './Components/Contact';


function App() {
  return (
    <div className="text-blue-800">
      <Header/>
      <Navbar/>

      <Routes>
      <Route exact path='/' element={<Home/>} />
        <Route exact path='/about' element={<About/>} />
        <Route exact path='/ptu-ieee-stb' element={<Ptustb/>} />
        <Route exact path='/off-members' element={<Offbrs/>} />
        <Route exact path='/wie' element={<Wie/>} />
        <Route exact path='/annualreport' element={<Annualr/>} />
        <Route exact path='/upcoming-events' element={<Upevents/>} />
        <Route exact path='/gallery' element={<Gallery/>} />
        <Route exact path='/contact-us' element={<Contact/>} />
      </Routes>
    </div>
  );
}

export default App;
