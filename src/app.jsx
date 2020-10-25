import React from 'react';
import Game from './game';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="game-background">
        <Game />
      </div>
    )
  }
}

export default App;
