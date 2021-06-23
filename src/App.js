import React, {Component} from 'react';
import GameBoard from './components/gameboard';
import NavBar from './components/navbar'

class App extends Component {
  state={
    size:0,
    tiles:[],
    moveCounter:0,
  };
  constructor(props){
    super(props);
    var boardSize = 3
    var newBoard = this.generateBoard(boardSize*boardSize)
    this.state = {
      tiles:newBoard,
      size:boardSize,
      moveCounter:0,
    }
  }

  handleCellPress = (tile) => {
      // switch then check for victory
      const tiles = [...this.state.tiles];
      var clicked = tiles.indexOf(tile);
      var empty = tiles.findIndex(t => t.value===0);
      var moves = this.state.moveCounter;
      moves++;
      var legal = this.checkLegalMove(clicked+1,empty+1)
      if (legal === false){return}
      tiles[clicked] = {...tile};
      tiles[empty] = {...tiles[empty]};
      var temp = tiles[clicked].value;
      tiles[empty].value = temp;
      tiles[clicked].value = 0;
      this.setState({
        tiles:tiles,
        moveCounter:moves
      }, this.gameComplete);
      
  }

  handleReset = () => {
      var resetMove=0;
      var boardSize = 3
      var x = document.getElementById("difficulty");
      var difficulty = x.value;
      if (difficulty==="Hard"){boardSize=5}
      var newBoard = this.generateBoard(boardSize*boardSize);
      this.setState({
          moveCounter:resetMove,
          tiles:newBoard,
          size:boardSize
      });
  }

  checkLegalMove(clickedIndex,emptyIndex){
      var boardSize = this.state.size;
      if (clickedIndex === emptyIndex){return false}
      if (clickedIndex-1 === emptyIndex && (clickedIndex-1)%boardSize!==0){return true;}
      if (clickedIndex+1 === emptyIndex && (clickedIndex)%boardSize!==0){return true;}
      if (clickedIndex-boardSize === emptyIndex){return true;}
      if (clickedIndex+boardSize === emptyIndex){return true;}
      return false;
  }

  generateBoard(boardSize){
      var newBoard = [];
      var values = []
      for(var i = 0; i < boardSize; i++){
          values.push(i);
      }
      for(var j = 0; j < boardSize; j++){
        var index = Math.floor(Math.random()* values.length);
        var randNum = values[index];
        values.splice(index,1)
        newBoard.push({id:j,value:randNum})
      }
      return newBoard;
  }
  gameComplete(){
    var finished = true;
    for(var count = 0; count < this.state.tiles.length; count++)
      {
        if(this.state.tiles[count].id!==this.state.tiles[count].value-1 && this.state.tiles[count].value!==0)
        {
            finished = false;
            break;
        }
      }
     if(finished){console.log("finished")}
  };

  render() { 
    return ( 
      <React.Fragment>
        <NavBar moves={this.state.moveCounter} onReset={this.handleReset}/>
          <GameBoard
            tiles={this.state.tiles}
            dimmensions={this.state.size}
            onCellPress={this.handleCellPress}
          />
          <p>Rules: This is a puzzle 8 game, arrange the tiles in numerical order from 1 to x. <br/> The last tile(bottom-right) should be 0.</p>
          

      </React.Fragment>
    );
  }
}
 
export default App;
