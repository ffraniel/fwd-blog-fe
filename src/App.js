import React, {useState} from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Home';
import Post from './Post';
import NoMatch from './NoMatch';
import Header from './components/Header';
import MobNav from './components/MobNav';
import CategoriesList from './CategoriesList';

function App() {

  const [mobNavOpen, setMobNavOpen] = useState(false);

  return (
    <div className="App">
      <Router>
        <MobNav 
          setMobNavOpen={setMobNavOpen} 
          mobNavOpen={mobNavOpen} 
        />
        <Header 
          setMobNavOpen={setMobNavOpen} 
          mobNavOpen={mobNavOpen} 
        />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/post/:postSlug" component={Post}/>
          <Route path="/category/:theme" component={CategoriesList}/>
          <Route component={NoMatch}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
