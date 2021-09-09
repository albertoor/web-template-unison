import React from 'react';
import './App.css';

// components
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import Info from './components/Info/Info';
import Footer from './components/Footer/Footer';
import Projects from './components/Projects/Projects';

export default function App() {
  return (
    <>
      <Navbar />
      <Main />
      <Info />
      <Projects />
      <Footer />
    </>
  );
}
