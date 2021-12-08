import "./App.css";
import React, { useEffect, useState } from "react";

function App() {

  const gameBoard = [
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [2, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [3, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [4, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [5, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [6, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [7, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [8, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];

  const Cuadricula = ({ children }) => {

    const [see, setSee] = React.useState(!true);
    /* const ver = () =>{
      setSee(!see)
    } */

    const [numb, setNumb] = React.useState(0 + Math.floor(Math.random() * 2));

    const handleSum = () => {
      if (numb === 0) {
        setNumb(numb + 3);
      } else if (numb === 1) {
        setNumb(numb + 1);
      }
      setSee(!see);
    };

    return (
      <>
        <div className="cuadradom col-sm-1" onClick={handleSum}>
          {see ? <>{numb}</> : null}
        </div>
      </>
    );
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>battleship</h1>
        <div className="tablero">
          <div className="container">
            <div className="row">
              <div className="cuadradop col-sm-1">0</div>
              <div className="cuadradop col-sm-1">1</div>
              <div className="cuadradop col-sm-1">2</div>
              <div className="cuadradop col-sm-1">3</div>
              <div className="cuadradop col-sm-1">4</div>
              <div className="cuadradop col-sm-1">5</div>
              <div className="cuadradop col-sm-1">6</div>
              <div className="cuadradop col-sm-1">7</div>
              <div className="cuadradop col-sm-1">8</div>
              <div className="cuadradop col-sm-1">9</div>
            </div>

            <div className="row">
              <div className="cuadradop col-sm-1">1</div>
              <Cuadricula />
              <Cuadricula />
              <Cuadricula />
              <Cuadricula />
              <Cuadricula />
              <Cuadricula />
              <Cuadricula />
              <Cuadricula />
              <Cuadricula />
            </div>

            <div className="row">
              <div className="cuadradop col-sm-1">2</div>
              <Cuadricula />
              <Cuadricula />
              <Cuadricula />
              <Cuadricula />
              <Cuadricula />
              <Cuadricula />
              <Cuadricula />
              <Cuadricula />
              <Cuadricula />
            </div>

            <div className="row">
              <div className="cuadradop col-sm-1">3</div>
              <Cuadricula />
              <Cuadricula />
              <Cuadricula />
              <Cuadricula />
              <Cuadricula />
              <Cuadricula />
              <Cuadricula />
              <Cuadricula />
              <Cuadricula />
            </div>

            <div className="row">
              <div className="cuadradop col-sm-1">4</div>
              <Cuadricula />
              <Cuadricula />
              <Cuadricula />
              <Cuadricula />
              <Cuadricula />
              <Cuadricula />
              <Cuadricula />
              <Cuadricula />
              <Cuadricula />
            </div>

            <div className="row">
              <div className="cuadradop col-sm-1">5</div>
              <Cuadricula />
              <Cuadricula />
              <Cuadricula />
              <Cuadricula />
              <Cuadricula />
              <Cuadricula />
              <Cuadricula />
              <Cuadricula />
              <Cuadricula />
            </div>

            <div className="row">
              <div className="cuadradop col-sm-1">6</div>
              <Cuadricula />
              <Cuadricula />
              <Cuadricula />
              <Cuadricula />
              <Cuadricula />
              <Cuadricula />
              <Cuadricula />
              <Cuadricula />
              <Cuadricula />
            </div>

            <div className="row">
              <div className="cuadradop col-sm-1">7</div>
              <Cuadricula />
              <Cuadricula />
              <Cuadricula />
              <Cuadricula />
              <Cuadricula />
              <Cuadricula />
              <Cuadricula />
              <Cuadricula />
              <Cuadricula />
            </div>

            <div className="row">
              <div className="cuadradop col-sm-1">8</div>
              <Cuadricula />
              <Cuadricula />
              <Cuadricula />
              <Cuadricula />
              <Cuadricula />
              <Cuadricula />
              <Cuadricula />
              <Cuadricula />
              <Cuadricula />
            </div>
            <div className="row">
              <div className="cuadradop col-sm-1">9</div>
              <Cuadricula />
              <Cuadricula />
              <Cuadricula />
              <Cuadricula />
              <Cuadricula />
              <Cuadricula />
              <Cuadricula />
              <Cuadricula />
              <Cuadricula />
            </div>
          </div>
        </div>
       
        
       
        <h4>Instructions</h4>
        <h5>the ships are hiding in the numbers "1" </h5>
        <h6>
          0 = Empty
        </h6>
        <h6>
        1 = part of a ship
        </h6>
        <h6>
        2 = a sunken part of a ship
        </h6>
        <h6>
        3 = a missed shot
        </h6>

          
          
         
      </header>
    </div>
  );
}

export default App;

/*   class BoxComponent extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        inicialNumber: 0 + Math.floor(Math.random() * 2),
      }
    }
    randomClick = () =>{
      this.setState({
        inicialNumber: this.state.inicialNumber + 1
      })
    }
  render() {
    return <>
     <div className="cuadradom col-sm-1"onClick={this.randomClick}>{this.state.inicialNumber}</div>
    </>;
  }
} */

/*   for (var i = 0; i < gameBoard.length; i++) {
  gameBoard.forEach((Element, index, array) => {
    console.log(Element[i]);
    
  });
} */
/*  const [count, setCount] = useState(0);
const numeroRandom = count + Math.floor(Math.random() * 2)
const ataque = () => {
  if(numeroRandom === 1){
    setCount(numeroRandom + 1)
  }
  else if(numeroRandom === 0){
    setCount(numeroRandom + 3)
  }
} */
