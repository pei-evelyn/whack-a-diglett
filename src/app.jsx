import React from 'react';
import Game from './game';
import Start from './start';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isStarted: false,
      player: null
    };
    this.startGame = this.startGame.bind(this);
  }

  startGame(player) {
    this.setState(state => ({
      isStarted: !state.isStarted,
      player: player
    }))
  }

  render() {
    return !this.state.isStarted ?
      <Start startGame={this.startGame} /> :
      <div className="game-background"><Game /></div>
  }
}

export default App;
