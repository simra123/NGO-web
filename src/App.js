import React from 'react'
import './App.css';
import './css/Responsive.css'
import { HashRouter, Route, Switch} from 'react-router-dom';
import Home from './pages/home/Home'
import AboutUS from './pages/about/AboutUS';
import News from './pages/news/News';
import NewsStory from './pages/news/NewsDetails';
import Causes from './pages/causes/Causes';
import Activity from './pages/activity/Activity';
  
function App() {
 // const Home = React.lazy(()=> import('./pages/Home/Home'))
  return (
   <>
  <HashRouter basename="/">

    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={AboutUS} />
      <Route exact path="/news" component={News} />
      <Route exact path="/news/details" component={NewsStory} />
      <Route exact path="/causes" component={Causes} />
      <Route exact path="/activity" component={Activity} />
    </Switch>  

  </HashRouter>
   </>
      

  );
}

export default App;