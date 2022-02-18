import './App.css';
import HeaderComponent from './components/HeaderComponent';
import CarouselComponent from './components/CarouselComponent';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import Services from './components/Services';
import Mission from './components/Mission';
import Downloads from './components/Downloads';
import About from './components/About';
import Gallary from './components/Gallary';
import Upcommings from './components/Upcommings';
import ContactUs from './components/ContactUs';
import Appointments from './components/Appointments';
import Leftsidebar from './components/Leftsidebar';
function App() {
  return (
    <div className="App">
      <div className="container-fluid">

        <div className="row">
          <HeaderComponent></HeaderComponent>
          <CarouselComponent></CarouselComponent>
        </div>

        <div className="row">
          <div className="col col-lg-2 leftsidebardiv "> <Leftsidebar></Leftsidebar></div>
          <div className="col col-lg-8 ">
            <Routes>
              <Route path="/" element={<Home />}>
              </Route>
              <Route path="/services" element={<Services />}></Route>
              <Route path="/mission" element={<Mission />}></Route>
              <Route path="/downloads" element={<Downloads />}></Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="/gallary" element={<Gallary />}></Route>
              <Route path="/upcommings" element={<Upcommings />}></Route>
              <Route path="/contact" element={<ContactUs />}></Route>
              <Route path="/appointments" element={<Appointments />}></Route>
            </Routes>
          </div>
          <div className="col col-lg-2 leftsidebardiv" ><Leftsidebar></Leftsidebar></div>
        </div>
      </div>
    </div >

  );
}

export default App;
