import React, { Fragment } from 'react';
import './App.css';
import SetInput from './component/SetInput';
import MovieList from './component/movieList';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import Description from './component/Description';


function App() {
  return (
    <Fragment>
    <Router>
      <Route exact path='/' component={SetInput}/>
      <Route exact path='/' component={MovieList}/>
      <Route path='/movie/:id' component={Description}/>
      
      </Router>
    </Fragment>
  );
}

export default App;
