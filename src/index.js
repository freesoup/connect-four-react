import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square(props) {
  return (
    <div><button className={`square ${!props.value ? "squareDefault" : props.value==='X' ? "squarePlayerX" : "squarePlayerO"}`}>
    </button></div>
  );
}

class Column extends React.Component {
  renderSquare(row, col) {
    return (
      <Square 
        value={this.props.squares[col][row]}
      />
    );
  }

  render() {
    return (
      <div className="board-col"  onClick={this.props.onClick}>
          {this.renderSquare(5, this.props.value)}
          {this.renderSquare(4, this.props.value)}
          {this.renderSquare(3, this.props.value)}
          {this.renderSquare(2, this.props.value)}
          {this.renderSquare(1, this.props.value)}
          {this.renderSquare(0, this.props.value)}
      </div>
    )
  }


}

class Board extends React.Component {
  renderColumn(col) {
    return (
      <Column
        value={col}
        onClick={() => this.props.onClick(col)}
        squares={this.props.squares}
      />
    )
  }

  render() {
    return (
      <div className="board-container">
        {this.renderColumn(0)}
        {this.renderColumn(1)}
        {this.renderColumn(2)}
        {this.renderColumn(3)}
        {this.renderColumn(4)}
        {this.renderColumn(5)}
        {this.renderColumn(6)}
      </div>
    );
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      history: [{
        squares: Array(7).fill(null).map(() => Array(6).fill(null)),
        playRow: null,
        playCol: null,
        gameIsWon: false,
        winner: null,
      }],
      stepNumber: 0,
      xIsNext: true,
    }
  }

  handleClick(col) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    var squares = [];
    for (let i = 0; i < current.squares.length; i++) {
      squares[i] = current.squares[i].slice();
    }
    let rowLanded;
    if (current.gameIsWon || squares[col][squares[col].length-1] != null) {
      return;
    }
    

    for (let i = 0; i < squares[col].length ;i++) {
      if (squares[col][i] === null) {
        squares[col][i] = this.state.xIsNext ? 'X' : 'O';
        rowLanded = i;
        break;
      } 
    }

    let winner = calculateWinner(squares, rowLanded, col);
    let gameIsWon = winner ? true : false
    
    this.setState({
      history: history.concat([{
        squares: squares,
        playRow: rowLanded,
        playCol: col,
        gameIsWon: gameIsWon,
        winner: winner
      }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0,
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    let winner;
    let gameIsDraw;

    if (current.gameIsWon) {
      winner = current.winner;
    } else if (this.state.stepNumber === 42) {
      gameIsDraw = true;
    }

    const moves = history.map((step, move) =>  {
      const desc = move ? 
        'Go to move #' + move :
        'Go to Game start';
      let location;
      if (step.playRow != null && step.playCol != null) {
        location = 'Location: (' + step.playRow + ',' + step.playCol + ')'
      }
      return (
        <div className="history-button-container" key={move}>
          <button className={`history-button ${move === this.state.stepNumber ? 'boldbutton' : ''}`} onClick={() => this.jumpTo(move)}>{desc} {location}</button>
        </div>
      );
    });


    let status;
    if (winner) {
      status = 'Winner'
    } else if (gameIsDraw) {
      status = 'Draw'
    } else {
      status = 'Next Player'
    }

    let nextPlayerIndicator = [];

    if (winner) {
      nextPlayerIndicator.push(<div className={`minisquare ${winner === 'X' ? 'squarePlayerX' : 'squarePlayerO'}`}></div>)
    }else if (!gameIsDraw) {
      nextPlayerIndicator.push(<div className={`minisquare ${this.state.xIsNext? 'squarePlayerX' : 'squarePlayerO'}`}></div>)
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board 
            squares={current.squares}
            onClick={(col) => this.handleClick(col)}
          />
          <div className="game-state">
            <div class="game-logo"><h1>Connect-4</h1></div>
            <div class="game-result">{ status }{nextPlayerIndicator}</div>
          </div>
        </div>
        <div className="history-bar">
          <div className="history-title"><h1>History</h1></div>
          <div className="game-info">
            <div>{ moves }</div>
          </div>
        </div>
      </div>
    );
  }
}

//Check in 8 directions ffrom the row, col
function calculateWinner(squares, row, col) {
  if (row == null || col == null) {
    return null;
  }
  let player = squares[col][row];
  //vertical check
  let count = 0
  for (let i = 0; i < squares[col].length; i++) {
    if (squares[col][i] === player) {
      count++
    } else {
      count = 0
    }

    if (count === 4) {
      return player
    }
  }

  //horizontal check
  count = 0
  for (let i = 0; i < squares.length; i++) {
    if (squares[i][row] === player) {
      count++
    } else {
      count = 0
    }

    if (count === 4) {
      return player
    }
  }

  //ascending diagonal check
  count = 0;
  let dummyRow;
  let dummyCol;
  if (row >= col) {
    dummyRow = row - col;
    dummyCol = 0;
  } else {
    dummyRow = 0;
    dummyCol = col - row;
  }
  for (let i = dummyCol, j = dummyRow; i < squares.length && j < squares[i].length; i++, j++) {
    if (squares[i][j] === player) {
      count++
    } else {
      count = 0
    }

    if (count === 4) {
      return player
    }
  }


  //descending diagonal check
  count = 0;
  let sum = row + col;
  if (sum <= squares[col].length) {
    dummyRow = sum;
    dummyCol = 0;
  } else {
    dummyRow = squares[col].length;
    dummyCol = sum-dummyRow;
  }
  for (let i = dummyCol, j = dummyRow; i < squares.length && j >= 0; i++, j--) {
    if (squares[i][j] === player) {
      count++
    } else {
      count = 0
    }

    if (count === 4) {
      return player
    }
  }

  return null;
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
