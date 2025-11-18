import React from 'react';
import Banner from './components/UI/Banner/Banner.jsx';
import About from './components/UI/About/About.jsx';
import Get from './components/UI/Get/Get.jsx';
import Instructor from './components/UI/Instructor/Instructor.jsx';

import './App.css';

function App() {

  return (
    <div className="App">
      <Banner/>
      <About/>
      <Get/>
      <Instructor/>
    </div>
  );
}

export default App;
