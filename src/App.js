import React, { Component } from 'react';
import Navbar from './layout/Navbar';
import { BrowserRouter } from 'react-router-dom';
import Dashboard from './dashboard/Dashboard';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Dashboard />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
