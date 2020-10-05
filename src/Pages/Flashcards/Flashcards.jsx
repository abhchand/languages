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
    this.formatExample = this.formatExample.bind(this);
    this.renderHidden = this.renderHidden.bind(this);
    this.renderAnswer = this.renderAnswer.bind(this);

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

  formatExample(card) {
    return <span dangerouslySetInnerHTML={{__html: card.example }}></span>;
  }

  renderHidden() {
    return <div className={'hidden'} onClick={this.revealAnswer}>Click to reveal</div>;
  }

  renderAnswer(card) {
    return (
      <div className={'answer'}>
        <p className="pronunciation">{card.pronounce}</p>
        <p className="example">As in: {this.formatExample(card)}</p>
      </div>
    );
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

        {this.state.isAnswerHidden ? this.renderHidden() : this.renderAnswer(card)}

        <div className="counter">{currentIndex + 1} of {this.state.cards.length}</div>
        <input type="button" onClick={this.prevCard} value={"← Prev"} />
        <input type="button" onClick={this.nextCard} value={"Next →"} />
      </div>
    );
  }
}

export default Flashcards;
