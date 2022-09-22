import React from "react";
import About from "./components/About";
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
    </div>
  );
}

export default App;
