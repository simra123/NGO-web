import React from 'react'
import './App.css';
import './css/Responsive.css'
import { HashRouter, Route, Switch} from 'react-router-dom';
import Home from './pages/home/Home'
import AboutUS from './pages/about/AboutUS';
import News from './pages/news&story/News';
import Causes from './pages/causes/Causes';
  
function App() {
 // const Home = React.lazy(()=> import('./pages/Home/Home'))
  return (
   <>
  <HashRouter basename="/">

    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={AboutUS} />
      <Route exact path="/news" component={News} />
      <Route exact path="/causes" component={Causes} />
    </Switch>  

  </HashRouter>
   </>
      

  );
}

export default App;