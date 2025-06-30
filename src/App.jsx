import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Courses from './components/Courses';
import Instructors from './components/Instructors';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CoursePage from './pages/CoursePage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-emerald-50">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <Benefits />
              <Courses />
              <Instructors />
              <Testimonials />
              <Contact />
            </>
          } />
          <Route path="/course/:id" element={<CoursePage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;