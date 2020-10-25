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
    console.log(player)
    this.setState(state => ({
      isStarted: !state.isStarted,
      player: player
    }))
  }

  render() {
    if (!this.state.isStarted) {
      return (
        <Start startGame={this.startGame}/>
      )
    }

    return (
      <div className="game-background">
        <Game />
      </div>
    )
  }
}

export default App;
