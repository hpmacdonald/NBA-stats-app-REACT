import React, { Component } from 'react';
import './App.css';
import Index from './pages/Index';
import TeamList from './pages/TeamList';
import Players from './pages/Players';
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Header from './components/Header';




class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route path='/' exact component={Index} />
          <Route path='/players' exact component={Players} />
          <Route path='/teamlist' exact component={TeamList} />
        </Switch>
      </Router>
    );
  }
}

export default App;
