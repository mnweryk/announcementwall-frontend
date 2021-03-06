import React from 'react';
import Navbar from './components/navbar'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import User from './components/user'
import Contact from './components/contact'
import Announcements from './components/announcements'
import Footer from './components/footer'
import'./App.css'
import SingleAnnouncement from './components/singleAnnouncement'
import NewAnnouncement from './components/newAnnouncement'


function App() {
  return (
      <BrowserRouter>
          <div className="App">
            <Navbar />
            <Switch>
            <Route path='/announcements' component={Announcements}/>
            <Route path='/add' component={NewAnnouncement} />
            <Route path='/login' component={User}/>
            <Route path='/contact' component={Contact}/>
            <Route path='/:announcementid' component={SingleAnnouncement} />
            </Switch>
            
          </div>
          <Footer />
      </BrowserRouter>
  );
}

export default App;
