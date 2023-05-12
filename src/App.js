
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

import Home from './components/Home';
import React  from 'react';
// import { useState , useEffect} from 'react';
import { Route,Routes } from 'react-router-dom';
import RestaurantView from './components/RestaurantView'




function App() {
  return (
    <div >
       <Header></Header>
      <header className="App-header">
        <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/view-restaurant/:id' element={<RestaurantView/>}/>
      
          </Routes>

      </header>
     <Footer></Footer>
    </div>
  );
}

export default App;
