import React,{useState} from 'react';
import { Route, Routes } from 'react-router-dom';

// import animate on scroll
import Aos from 'aos';
import 'aos/dist/aos.css';

import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Ptustb from './Components/Ptustb';
import Upevents from './Components/Upevents';
import Offbrs from './Components/Offbrs';
import Wie from './Components/wie/Wie';

import LoadingPage from './Components/Loadingpage/loadingpage';

import Annualr from './Components/Annualr/Annualr';
import Gallery from './Components/Gallery';
import Contact from './Components/Contact';
import Footer from './Components/Footer';


function App() {

  Aos.init({
    duration: 1800,
    offset: 0,
  });

  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 3800);


  return (
<>
      {loading ? (
        <LoadingPage />
      ) : (


    <div className="text-blue-800">
      <Header/>
      <Navbar/>

      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/ptu-ieee-stb' element={<Ptustb/>} />
        <Route exact path='/off-members' element={<Offbrs/>} />
        <Route exact path='/wie' element={<Wie/>} />
        <Route exact path='/annualreport' element={<Annualr/>} />
        <Route exact path='/upcoming-events' element={<Upevents/>} />
        <Route exact path='/gallery' element={<Gallery/>} />
        <Route exact path='/contact-us' element={<Contact/>} />
      </Routes>
      <Footer/>
    </div>
 )}
 </>

  );
}

export default App;
