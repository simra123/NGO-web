import React from 'react'
import './App.css';
import './css/Responsive.css'
import { HashRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/home/Home'
import AboutUS from './pages/about/AboutUS';
import News from './pages/news/News';
import NewsStory from './pages/news/NewsDetails';
import Causes from './pages/causes/Causes';
import CausesDetails from './pages/causes/CausesDetails';
import Activity from './pages/activities/Activity';
import ActivityDetails from './pages/activities/ActivityDetails';
import Login from './pages/login/Login';
import SignUp from './pages/signup/Signup';
import ContactUs from './pages/contact-us/ContactUs';
import BecomeAVolunteer from './pages/volunteer/Volunteer'
import Dashboard from './pages/user-dashboard/Dashboard';
import PrivacyPolicy from './pages/privacy-policy/PrivacyPolicy';
import TermsConditions from './pages/terms-conditions/TermsConditions';
import Gallery from './components/Gallery'

function App() {
  // const Home = React.lazy(()=> import('./pages/Home/Home'))
  return (
    <>
      <HashRouter basename="/">

        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/about" component={ AboutUS } />
          <Route exact path="/news" component={ News } />
          <Route exact path="/news/details" component={ NewsStory } />
          <Route exact path="/causes" component={ Causes } />
          <Route exact path="/causes/details" component={ CausesDetails } />
          <Route exact path="/activity" component={ Activity } />
          <Route exact path="/activity/details" component={ ActivityDetails } />
          <Route exact path="/login" component={ Login } />
          <Route exact path="/signup" component={ SignUp } />
          <Route exact path="/contact-us" component={ ContactUs } />
          <Route exact path="/Volunteer" component={ BecomeAVolunteer } />
          <Route exact path="/dashboard" component={ Dashboard } />
          <Route exact path="/terms-conditions" component={ TermsConditions } />
          <Route exact path="/privacy-policy" component={ PrivacyPolicy } />
          <Route exact path="/gallery" component={ Gallery } />
        </Switch>

      </HashRouter>
    </>


  );
}

export default App;