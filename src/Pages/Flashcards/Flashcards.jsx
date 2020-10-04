import React from 'react';
import shuffle from './shuffle';
import { useParams } from "react-router-dom";

import './Flashcards.css';

class Flashcards extends React.Component {

  constructor(props) {
    super(props);

    this.nextCard = this.nextCard.bind(this);
    this.fetchData = this.fetchData.bind(this);

    this.language = props.match.params.language;

    this.state = {
      cards: [],
      isLoading: true,
      currentIndex: 0,
      isAnswerHidden: true
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    const self = this;

    this.setState({ isLoading: true });

    fetch(process.env.PUBLIC_URL + '/data.json').
      then(function(response) { return response.json(); }).
      then(function(result) {
        const cards = JSON.parse(JSON.stringify(result.data[self.language].alphabet));
        self.setState({
          cards: shuffle(cards),
          isLoading: false,
          currentIndex: 0
        });
      });
  }

  nextCard() {
    let newIndex = this.state.currentIndex + 1;

    if (newIndex >= this.state.cards.length) {
      newIndex = 0;
    }

    this.setState({
      currentIndex: newIndex,
      isAnswerHidden: true
    })
  }

  render() {
    if (this.state.isLoading) {
      return <h1>Loading...</h1>;
    }

    const { currentIndex } = this.state;
    const card = this.state.cards[currentIndex];

    return (
      <div class="flashcard">
        <div class="counter">{currentIndex + 1} of {this.state.cards.length}</div>
        <div class="value">{card.char}</div>
        <div class="answer">
          <p>{card.pronounce}</p>
          <p>{card.example}</p>
        </div>
        <input type="button" onClick={this.nextCard} value={"Next"} />
      </div>
    );
  }
}

export default Flashcards;
