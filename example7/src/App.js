import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import Body from './Components/Body';
import Footer from './Components/Footer';

function App(){
  return (
    <div className="App">
        <Header/>
        <Body/>
        <Footer/>
    </div>
  );
}

export default App;
