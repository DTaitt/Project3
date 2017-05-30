import React, { Component } from 'react';
import './App.css';

//Importing React Router 
import {
  BrowserRouter as Router,
  Route,
 
} from 'react-router-dom'

//import components
import Index from './components/Index.jsx';
import  Boroughpage  from './components/Boroughpage.jsx';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={ Index } />
          <Route exact path="/:boroughpage" component={ Boroughpage } />
        </div>
      </Router>
    );
  }
}

export default App;
