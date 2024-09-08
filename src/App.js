import React from 'react';

import {CTA, Feature, Navbar} from './components';
import { Features, Footer, Sidebar, Header } from './container'; 
import './App.css'


const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
      <Navbar />
      <Header />
      </div>
      <Sidebar />
      <Features />
      <Footer />
    </div>
  )
}

export default App
