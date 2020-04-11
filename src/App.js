import React from 'react';
import './index.css';

import Bio from './Bio';
import Books from './Books';
import CBBC from './CBBC';
import FAQ from './FAQ';
import News from './News';
import Show from './Show';
import Home from './Home';
import Contact from './Contact';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="topper-nav">
    <div className="top-nav"><Link className="" to="/"><h1 className="underline">Pat Cummings</h1></Link></div>
    <div className="bottom-nav">
      <div className="navLink"><NavLink className="underline" to="/bio">Bio</NavLink></div> 
      <div className="navLink"><NavLink className="underline" to="/books">Books</NavLink></div>  
      <div className="navLink"><NavLink className="underline" to="/news">News</NavLink></div>   
      <div className="navLink"><NavLink className="underline" to="/cbbc">CBBC</NavLink></div>   
      <div className="navLink"><NavLink className="underline" to="/faq">FAQ</NavLink></div>   
      <div className="navLink"><NavLink className="underline" to="/contact">Contact</NavLink></div>   
    </div>
    </div>
    <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/pats-site">
          <Home />
        </Route>
        <Route path="/bio">
          <Bio />
        </Route>
        <Route exact path="/books">
          <Books />
        </Route>
        <Route path="/news">
          <News />
        </Route>
        <Route path="/cbbc">
          <CBBC />
        </Route>
        <Route path="/faq">
          <FAQ />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/:url">
          <Show />
        </Route>
 
    </Switch>  

    

    </Router>
  );
}

export default App;
