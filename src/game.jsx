import React from 'react';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.handleDiglettClick = this.handleDiglettClick.bind(this);
    this.state = { isHit: false, isHere: true };
  }

  handleDiglettClick() {
    this.setState({ isHit: true });
    setTimeout(() => {
      this.setState({ isHere: false });
    }, 2000);
  }

  render() {
    if (!this.state.isHere) {
      return (
        <div className="diglett-container"></div>
      )
    }
    return (
      <div className="diglett-container">
        { this.state.isHit
        ? <img className="position-8" src="images/diglett-angry.png" />
        : <img className="position-8" src="images/diglett.png" onClick={this.handleDiglettClick} />
        }
      </div>
    )
  }
}

export default Game;
