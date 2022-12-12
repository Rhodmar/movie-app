import './App.css';
import React,{useState, useEffect} from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import MovieList from './MovieList';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <div >  
        <Navbar/>
      </div>
      <div >
        <Sidebar/>      
      </div>
      <div >
        <MovieList movies = {movies} movies2 ={movies2} />
      </div>
    </div>
  );
}

export default App;
