import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/page/Home'
import About from './components/page/About'
import Service from './components/page/Service';
import Contact from './components/page/Contact'
import NotFound from './components/page/NotFound';
import ChatButton from './components/ChatButton';



function App() {
  return (
    
  <>
  <Navbar />
  <ChatButton />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
  
  
  
  </>
  );
}

export default App;
