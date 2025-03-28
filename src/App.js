import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landingpage from './Components/Landingpage';
import Navbar from './Components/Navbar';
import About from './Components/About'
import Services from './Components/Services';
import Contact from './Components/Contact';
import Portfolio from './Components/Portfolio';
import OffcanvasExample from './Components/Nav-bar';
import ProfilePage from './Components/profilePage';
import Review from './Components/Review';

import UserWayWidget1 from './Components/UserWayWidget';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Admin from './Components/Admin';
function App() {
  return (
    
    <div className="App">
      <header>
        <Navbar />
      </header>
 
      <Router>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path='/about' element = {<About/>}/>
          <Route path='/Service' element = {<Services/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/portfolio' element={<Portfolio/>}/>
          <Route path='/profile/:teamMemberId' element={<ProfilePage />} />
          <Route path='/review/:name' element={<Review />} />
          <Route path='/sign-up' element={<Signup/>} />
          <Route path='/sign-in' element={<Login/>} />
          <Route path='/admin' element={<Admin/>} />
        </Routes>
     
      </Router>
      <UserWayWidget1 />
    </div>
  );
}

export default App;
