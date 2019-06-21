import React from 'react';
import Navbar from './components/navbar'
import {BrowserRouter, Route} from 'react-router-dom'
import User from './components/user'
import Contact from './components/contact'
import Announcements from './components/announcements'
import Footer from './components/footer'
import'./App.css'


function App() {
  return (
      <BrowserRouter>
          <div className="App">
            <Navbar />
            <Route exact path='/announcements' component={Announcements}/>
            <Route exact path='/user' component={User}/>
            <Route exact path='/contact' component={Contact}/>

            
          </div>
          <Footer />
      </BrowserRouter>
  );
}

export default App;
