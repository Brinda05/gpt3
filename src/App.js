import React from 'react';
import './App.css';
import Brand from './components/brand/Brand';
import CTA from './components/cta/CTA';
import Navbar from './components/navbar/Navbar';
import Features from './containers/features/Features';
import Blog from './containers/blog/Blog';
import Footer from './containers/footer/Footer';
import Header from './containers/header/Header';
import Possibility from './containers/possibility/Possibility';
import Whatfirst from './containers/whatfirst/Whatfirst';
const App = () => {
    
  return (
    <div className='App'>
        <div className='gradient__bg'>
        <Navbar />
        <Header />
        </div>
        <Brand />
        <Whatfirst />
        <Features />
        <Possibility />
        <CTA />
        <Blog />
        <Footer />
        

    </div>
   
    
  )
}

export default App;