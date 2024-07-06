import React from 'react';
import './index.css';
import Navbar from './components/Navbar.js'
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
       <>
        <main className="text-green-400  body-font" style={{
          backgroundImage: `url('./public/danielabsi.jpg')`,
          backgroundSize: '50%',
          backgroundPosition: 'center',
        }}>
		<Navbar />
        <About />
        <Projects />
	    <Skills />
		<Testimonials />
       <Contact />
      </main>
      <Footer />
    </>
  );
}

//src="./public/favicon_ico/android-chrome-192x192.png"//

//bg-blue-900


