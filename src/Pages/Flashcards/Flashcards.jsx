import React from 'react';
import { useParams } from "react-router-dom";
import fetchData from '../../shared/fetch-data';

import './Flashcards.css';

class Flashcards extends React.Component {

  constructor(props) {
    super(props);

    this.fetchData = fetchData.bind(this);
    this.nextCard = this.nextCard.bind(this);
    this.prevCard = this.prevCard.bind(this);
    this.revealAnswer = this.revealAnswer.bind(this);

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

  prevCard() {
    let newIndex = this.state.currentIndex - 1;

    if (newIndex < 0) {
      newIndex = this.state.cards.length - 1;
    }

    this.setState({
      currentIndex: newIndex,
      isAnswerHidden: true
    });
  }

  revealAnswer() {
    this.setState({ isAnswerHidden: false });
  }

  render() {
    if (this.state.isLoading) {
      return <h1>Loading...</h1>;
    }

    const { currentIndex } = this.state;
    const card = this.state.cards[currentIndex];

    return (
      <div className="flashcard content">
        <div className='nav'>
          <a href={"/languages"}><input type="button" value={"Home"} /></a>
          <a href={`/languages/${this.language}/letters`}><input type="button" value={"View as list"} /></a>
        </div>

        <div className="value">{card.char}</div>
        <div className={`answer ${this.state.isAnswerHidden ? 'hidden' : ' '}`}>
          <p className="pronunciation" onClick={this.revealAnswer}>{card.pronounce}</p>
          <p className="example" onClick={this.revealAnswer}>As in: {card.example}</p>
          <p className="instructions">{this.state.isAnswerHidden ? 'Click to reveal' : ''}</p>
        </div>

        <div className="counter">{currentIndex + 1} of {this.state.cards.length}</div>
        <input type="button" onClick={this.prevCard} value={"← Prev"} />
        <input type="button" onClick={this.nextCard} value={"Next →"} />
      </div>
    );
  }
}

export default Flashcards;
