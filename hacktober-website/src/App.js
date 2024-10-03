import React from 'react';
import './App.css';
import Footer from './components/Footer'; 
import Header from './components/Header/Header';
import Description from './components/description'; 
import Prizes from './components/Prizes';// Import the footer
import RegistrationForm from './components/RegistrationForm/RegistrationForm';

function App() {
  return (
    <div className="App">
      <Header/>
      <Description/>
      {/* <Prizes/> */}
      <RegistrationForm/>
      <Footer />
    </div>
  );
}

export default App;
