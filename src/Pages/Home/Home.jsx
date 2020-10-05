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
      <div className="content">
        <h2>Tamil</h2>
          <p>Lettters</p>
          <ul>
            <li><NavLink to={'/languages/tamil/letters'}>list</NavLink></li>
            <li><NavLink to={'/languages/tamil/letters/flashcards'}>flashcards</NavLink></li>
          </ul>
      </div>
    );
  }
}

export default Home;
