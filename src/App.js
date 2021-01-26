import React, { Component } from 'react';
import './App.css';
import Player from './components/Player';
import Search from './components/Search';
import Header from './components/Header';


class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <section>
          
            <Search />
            <h1 style={{ fontSize: '30px', color: 'white', float: 'right' }}>NBA Stats API</h1>
        </section>
        
        <div className='main--container'>
          <Player />
        </div>
      </div>
    );
  }
}

export default App;
