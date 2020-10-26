import React from 'react';
import Game from './game';
import Start from './start';
import Score from './score';
import Health from './health';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isStarted: false,
      gender: null,
      hits: 0
    };
    this.startGame = this.startGame.bind(this);
    this.increaseHits = this.increaseHits.bind(this);
  }

  startGame(gender) {
    this.setState(state => ({
      isStarted: !state.isStarted,
      gender: gender
    }))
  }

  increaseHits() {
    this.setState(state => ({
      hits: hits++
    }))
  }

  render() {
    if (!this.state.isStarted) {
      return <Start startGame={this.startGame} />
    }
    return (
      <div className={`game-background ${this.state.gender}`}>
        <Score score={this.state.hits}/>
        <Health />
        <Game increaseHits={this.increaseHits}/>
      </div>
    )
  }
}

export default App;
