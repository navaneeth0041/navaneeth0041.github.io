import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header/Header';
import Description from './components/description';
import FeaturedEvents from './components/Events/featuredevents';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';

function App() {
  return (
    <div className="App scroll-container">
      <Header />
      <Description />
      {/* <Prizes/> */}
      <FeaturedEvents/>
      <RegistrationForm />
      <Footer />
    </div>
  );
}

export default App;
