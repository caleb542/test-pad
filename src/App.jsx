import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import PropTypes from 'prop-types'
import reactLogo from './assets/react.svg'
import Nav from './components/Nav'
import Home from './pages/Home'
import Ratings from './pages/Ratings'
import Footer from './components/Footer'
import './App.css'


function App() {
  

  return (<>
  <div className="App">
    <div className="p-container">
      <Router> 
        <Nav/> 
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/ratings' element={<Ratings />} />
        </Routes>
      </Router> 
    </div>

    <Footer  title="CH "/>

  </div>
  </>)
}

export default App
