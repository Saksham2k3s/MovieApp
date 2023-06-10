import React, { Component } from 'react';
import Movie from './Component/Movie';
import './App.css'
import { Route, Routes } from 'react-router-dom';
import MovieDetails from './Component/MovieDetails';


export default class App extends Component {
  render() {
    return (
      <>
<Routes>
  <Route path='/' element={<Movie/>} />
  <Route path='/moviedetails' element={<MovieDetails/>} />
</Routes>

 
  </>
     );
  }
}
