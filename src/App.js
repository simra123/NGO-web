import React from 'react'
import './App.css';
import { HashRouter, Route, Switch} from 'react-router-dom';
import Home from './pages/home/Home'
import AboutUS from './pages/about/AboutUS';
  
function App() {
 // const Home = React.lazy(()=> import('./pages/Home/Home'))
  return (
   <>
  <HashRouter basename="/">

    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={AboutUS} />
    </Switch>  

    </HashRouter>
   </>
  );
}

export default App;