import React from 'react'
import './App.css';
import { HashRouter, Route, Switch} from 'react-router-dom';
import Home from './pages/home/Home'
import AboutUS from './pages/about/AboutUS';
import News from './pages/news&story/News';
  
function App() {
 // const Home = React.lazy(()=> import('./pages/Home/Home'))
  return (
   <>
  <HashRouter basename="/">

    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={AboutUS} />
      <Route exact path="/news" component={News} />
    </Switch>  

  </HashRouter>
   </>
      

  );
}

export default App;