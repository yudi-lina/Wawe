import React from 'react';
import Banner from './components/UI/Banner/Banner.jsx';
import About from './components/UI/About/About.jsx';
import Get from './components/UI/Get/Get.jsx';
import Instructor from './components/UI/Instructor/Instructor.jsx';
import Service from './components/UI/Service/Service.jsx';
import Team from './components/UI/Team/Team.jsx';


import './App.css';

function App() {

  return (
    <div className="App">
      <Banner/>
      <About/>
      <Get/>
      <Instructor/>
      <Service />
      <Team />
    </div>
  );
}

export default App;
