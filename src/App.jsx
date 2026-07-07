import React from 'react';
import Navbar from './components/Navbar';
import  Home from  './pages/Home';
import  Projects from  './pages/Projects';



// TODO: Import react router dom here
import { BrowserRouter,Routes,Route } from 'react-router-dom';


import Footer from './components/Footer';
import './styles/App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
export default App;


