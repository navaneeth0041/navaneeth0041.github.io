import React from 'react';
import './App.css';
import Footer from './components/Footer'; 
import Header from './components/Header/Header';
import Description from './components/description'; 
import Prizes from './components/Prizes';// Import the footer

function App() {
  return (
    <div className="App">
      {/* Other content */}
      <Header/>
      

      <Footer />
    </div>
  );
}

export default App;
