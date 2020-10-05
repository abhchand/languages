import shuffle from './shuffle';

function fetchData(shouldShuffle = false) {
  const self = this;

  this.setState({ isLoading: true });

  fetch(process.env.PUBLIC_URL + '/data.json').
    then(function(response) { return response.json(); }).
    then(function(result) {
      const cards = JSON.parse(JSON.stringify(result.data[self.language].alphabet));
      self.setState({
        cards: shouldShuffle ? shuffle(cards) : cards,
        isLoading: false,
        currentIndex: 0
      });
    });
}

export default fetchData;
