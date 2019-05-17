import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Home';
import Post from './Post';
import About from './About';
import NoMatch from './NoMatch';
import Header from './components/Header';

function App() {

  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/post/:post-slug" component={Post}/>
          <Route component={NoMatch}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
