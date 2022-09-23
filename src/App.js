import React from "react";
import About from "./components/About";
import Demo from "./components/Demo";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div>
     <NavBar/>
     <Hero />
     <About/>
     <Testimonials/>
     <Demo/>
     <Footer/>
    </div>
  );
}

export default App;
