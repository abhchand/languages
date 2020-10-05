import React from 'react';
import { NavLink } from "react-router-dom";

import './Home.css';

class Home extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <div className="home content">
        <h1>Languages</h1>

        <h3>Tamil</h3>
          <p>Lettters</p>
          <ul>
            <li><NavLink to={'/languages/tamil/letters'}>View as list</NavLink></li>
            <li><NavLink to={'/languages/tamil/letters/flashcards'}>View as flashcards</NavLink></li>
          </ul>
      </div>
    );
  }
}

export default Home;
