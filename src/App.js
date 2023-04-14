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
import Aboutwie from './Components/wie/Aboutwie';
import Vision from './Components/wie/Vision';
import Wiemem from './Components/wie/Wiemem';


import LoadingPage from './Components/Loadingpage/loadingpage';

import Annualr2021 from './Components/Annualr/Annualr2021';
import Annualr2022 from './Components/Annualr/Annualr2022';
import Annualr2023 from './Components/Annualr/Annualr2023';

import Gallery from './Components/Gallery';
import Gallery2021 from './Components/gallery/gallery2021';
import Gallery2022 from './Components/gallery/gallery2022';
import Gallery2023 from './Components/gallery/gallery2023';

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
        <Route exact path='/Aboutwie' element={<Aboutwie/>} />
        <Route exact path='/vision' element={<Vision/>} />
        <Route exact path='/wiemem' element={<Wiemem/>} />
        <Route exact path='/annual-r-2021' element={<Annualr2021/>} />
        <Route exact path='/annual-r-2022' element={<Annualr2022/>} />
        <Route exact path='/annual-r-2023' element={<Annualr2023/>} />
        <Route exact path='/upcoming-events' element={<Upevents/>} />
        <Route exact path='/gallery' element={<Gallery/>} />
        <Route exact path='/gallery-2021' element={<Gallery2021/>} />
        <Route exact path='/gallery-2022' element={<Gallery2022/>} />
        <Route exact path='/gallery-2023' element={<Gallery2023/>} />
        <Route exact path='/contact-us' element={<Contact/>} />
      </Routes>
      <Footer/>
    </div>
 )}
 </>

  );
}

export default App;
