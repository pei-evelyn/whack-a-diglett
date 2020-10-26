import React from 'react';
import Game from './game';
import Start from './start';
import Score from './score';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isStarted: false,
      gender: null
    };
    this.startGame = this.startGame.bind(this);
  }

  startGame(gender) {
    this.setState(state => ({
      isStarted: !state.isStarted,
      gender: gender
    }))
  }

  render() {
    return !this.state.isStarted ?
      <Start startGame={this.startGame} /> :
      (
        <div className={`game-background ${this.state.gender}`}>
          <Score />
          <Game />
        </div>
      )
  }
}

export default App;
