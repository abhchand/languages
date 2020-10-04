import React from 'react';
import './App.css';
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Home from './Pages/Home/Home';
import Flashcards from './Pages/Flashcards/Flashcards';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/languages/" exact component={Home} />
          <Route path="/languages/:language/letters/flashcards" component={Flashcards} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
