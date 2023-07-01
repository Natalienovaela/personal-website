import logo from './logo.svg';
import React from 'react';
import './App.css';
import Nav from './components/nav/Nav.jsx';
import About from './components/about/About';
import Projects from './components/projects/Projects';

function App() {
  return (
    <div className="App">
        <Nav/>
        <About id="about">About</About>
        <Projects id="projects">Projects</Projects>
    </div>
  );
}

export default App;
