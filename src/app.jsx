import React from 'react';
import Game from './game';
import Start from './start';
import Timer from './timer'
import Score from './score';
import Health from './health';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isStarted: false,
      gender: null,
      hits: 0,
      isOpen: false
    };
    this.startGame = this.startGame.bind(this);
    this.increaseHits = this.increaseHits.bind(this);
    this.openModal = this.openModal.bind(this);
  }

  startGame(gender) {
    this.setState(state => ({
      isStarted: !state.isStarted,
      gender: gender
    }))
  }

  increaseHits() {
    this.setState(state => ({
      hits: state.hits + 1
    }))
  }

  openModal() {
    this.setState(state => ({
      isOpen: !state.isOpen
    }))
  }

  render() {
    if (!this.state.isStarted) {
      return <Start startGame={this.startGame} />
    }
    return (
      <div className={`game-background ${this.state.gender}`}>
        <Score score={this.state.hits} />
        <Health />
        <Game increaseHits={this.increaseHits} />
        <Timer restartGame={this.startGame} openModal={this.openModal} isOpen={this.state.isOpen} />
      </div>
    )
  }
}

export default App;
