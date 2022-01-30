import React from 'react';
import Navbar from "./components/navbar/Navbar";
import Hero from './components/hero/Hero';
import About from "./components/About/About";
import Developer from "./components/developer/Developer";
import Subscribe from "./components/subcribe/Subscribe";
import Footer from "./components/footer/Footer";

const App = () => {
    return (
        <div>
            <Navbar/>
            <Hero/>
            <About/>
            <Developer/>
            <Subscribe/>
            <Footer/>
        </div>
    );
};

export default App;