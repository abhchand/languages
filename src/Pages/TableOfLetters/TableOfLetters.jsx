import React from 'react';
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import fetchData from '../../shared/fetch-data';

import './TableOfLetters.css';

class TableOfLetters extends React.Component {

  constructor(props) {
    super(props);

    this.fetchData = fetchData.bind(this);
    this.formatExample = this.formatExample.bind(this);

    this.language = props.match.params.language;

    this.state = {
      cards: [],
      isLoading: true
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  formatExample(card) {
    return <td dangerouslySetInnerHTML={{__html: card.example }}></td>;
  }

  render() {
    if (this.state.isLoading) {
      return <h1>Loading...</h1>;
    }

    return (
      <div className="content">
        <div className='table-of-letters__nav'>
          <NavLink to={'/languages'}><input type="button" value={"Home"} /></NavLink>
          <NavLink to={`/languages/${this.language}/letters/flashcards`}><input type="button" value={"View as flashcards"} /></NavLink>
        </div>

        <h1>{`${this.language} letters`}</h1>

        <table>
          <tr>
            <th>Letter</th>
            <th>Pronunciation</th>
            <th>Example</th>
          </tr>

          {
            this.state.cards.map(card => {
              return (
                <tr>
                  <td>{card.char}</td>
                  <td>{card.pronounce}</td>
                  {this.formatExample(card)}
                </tr>
              );
            })
          }
        </table>
      </div>
    );
  }
}

export default TableOfLetters;
