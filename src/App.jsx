import React from 'react';
import Navbar from "./components/navbar/Navbar";
import Hero from './components/hero/Hero';
import About from "./components/About/About";
import Developer from "./components/developer/Developer";

const App = () => {
    return (
        <div>
            <Navbar/>
            <Hero/>
            <About/>
            <Developer/>
        </div>
    );
};

export default App;