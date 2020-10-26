import React from 'react';
import Game from './game';
import Start from './start';
import Timer from './timer'

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
    if (!this.state.isStarted) {
      return <Start startGame={this.startGame} />
    }
    return (
      <>
        <div className={`game-background ${this.state.gender}`}>
          <Game />
          <Timer />
        </div>
      </>
    )
  }
}

export default App;
