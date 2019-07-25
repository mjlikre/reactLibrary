import React from "react";
import Books from "./pages/Books";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Books />
        <Switch>
          <Route exact path = '/' compoment = {Books}/>
          <Route exact path = '/books' compoment = {Books}/>
          <Route exact path = '/books/:id' component = {Detail}/>
          <Route compoment = {NoMatch}/>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
