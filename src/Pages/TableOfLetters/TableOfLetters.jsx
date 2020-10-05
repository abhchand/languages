import React from 'react';
import { useParams } from "react-router-dom";
import fetchData from '../../shared/fetch-data';

import './TableOfLetters.css';

class TableOfLetters extends React.Component {

  constructor(props) {
    super(props);

    this.fetchData = fetchData.bind(this);

    this.language = props.match.params.language;

    this.state = {
      cards: [],
      isLoading: true
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    if (this.state.isLoading) {
      return <h1>Loading...</h1>;
    }

    return (
      <div class="content">
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
                  <td>{card.example}</td>
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
