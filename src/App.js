
import './App.css';
import { useState } from 'react';

function App() {

  const gameBoard = [
    [0,1,2,3,4,5,6,7,8,9],
    [1,0,0,0,0,0,0,0,0,0],
    [2,0,0,0,0,0,0,0,0,0],
    [3,0,0,0,0,0,0,0,0,0],
    [4,0,0,0,0,0,0,0,0,0],
    [5,0,0,0,0,0,0,0,0,0],
    [6,0,0,0,0,0,0,0,0,0],
    [7,0,0,0,0,0,0,0,0,0],
    [8,0,0,0,0,0,0,0,0,0],
    [9,0,0,0,0,0,0,0,0,0]

  ]
  
  const [count, setCount] = useState(0);
  const numeroRandom = count + Math.floor(Math.random() * 2)
  const ataque = () => {
    if(numeroRandom === 1){
      setCount(numeroRandom + 1)
    }
    else if(numeroRandom === 0){
      setCount(numeroRandom + 3)
    }
  }

  return (
    <div className="App">
      <header className="App-header">
     <h1>battleship</h1>
      <div className="tablero">
        <div className="container">
        <div className="row">
            <div className="cuadrado col-sm-1">0</div>
            <div className="cuadrado col-sm-1">1</div>
            <div className="cuadrado col-sm-1">2</div>
            <div className="cuadrado col-sm-1">3</div>
            <div className="cuadrado col-sm-1">4</div>
            <div className="cuadrado col-sm-1">5</div>
            <div className="cuadrado col-sm-1">6</div>
            <div className="cuadrado col-sm-1">7</div>
            <div className="cuadrado col-sm-1">8</div>
            <div className="cuadrado col-sm-1">9</div>
            
            </div>

            <div className="row">
            <div className="cuadrado col-sm-1">1</div>
            <div className="cuadradom col-sm-1"onClick={ataque}> {numeroRandom}</div>
            <div className="cuadradom col-sm-1"onClick={ataque}> {count + Math.floor(Math.random() * 2)}</div>
            <div className="cuadradom col-sm-1"onClick={ataque}> {count + Math.floor(Math.random() * 2)}</div>
            <div className="cuadradom col-sm-1"onClick={ataque}> {count + Math.floor(Math.random() * 2)}</div>
            <div className="cuadradom col-sm-1"onClick={ataque}> {count + Math.floor(Math.random() * 2)}</div>
            <div className="cuadradom col-sm-1"onClick={ataque}> {count + Math.floor(Math.random() * 2)}</div>
            <div className="cuadradom col-sm-1"onClick={ataque}> {count + Math.floor(Math.random() * 2)}</div>
            <div className="cuadradom col-sm-1"onClick={ataque}> {count + Math.floor(Math.random() * 2)}</div>
            <div className="cuadradom col-sm-1"onClick={ataque}> {count + Math.floor(Math.random() * 2)}</div>
                     
           </div>

            <div className="row">
            <div className="cuadrado col-sm-1">2</div>
            <div className="cuadradom col-sm-1"></div>
            <div className="cuadradom col-sm-1"></div>
            <div className="cuadradom col-sm-1"></div>
            <div className="cuadradom col-sm-1"></div>
            <div className="cuadradom col-sm-1"></div>
            <div className="cuadradom col-sm-1"></div>
            <div className="cuadradom col-sm-1"></div>
            <div className="cuadradom col-sm-1"></div>
            <div className="cuadradom col-sm-1"></div>
            
            </div>

            <div className="row">
            <div className="cuadrado col-sm-1">3</div>
            <div className="cuadradom col-sm-1"></div>
            <div className="cuadradom col-sm-1"></div>
            <div className="cuadradom col-sm-1"></div>
            <div className="cuadradom col-sm-1"></div>
            <div className="cuadradom col-sm-1"></div>
            <div className="cuadradom col-sm-1"></div>
            <div className="cuadradom col-sm-1"></div>
            <div className="cuadradom col-sm-1"></div>
            <div className="cuadradom col-sm-1"></div>
            
            </div>

            <div className="row">
            <div className="cuadrado col-sm-1">4</div>
            <div className="cuadradom col-sm-1"></div>
            <div className="cuadradom col-sm-1"></div>
            <div className="cuadradom col-sm-1"></div>
            <div className="cuadradom col-sm-1"></div>
            <div className="cuadradom col-sm-1"></div>
            <div className="cuadradom col-sm-1"></div>
            <div className="cuadradom col-sm-1"></div>
            <div className="cuadradom col-sm-1"></div>
            <div className="cuadradom col-sm-1"></div>
            
            </div>

            <div className="row">
            <div className="cuadrado col-sm-1">5</div>
            <div className="cuadradom col-sm-1"></div>
            <div className="cuadradom col-sm-1"></div>
            <div className="cuadradom col-sm-1"></div>
            <div className="cuadradom col-sm-1"></div>
            <div className="cuadradom col-sm-1"></div>
            <div className="cuadradom col-sm-1"></div>
            <div className="cuadradom col-sm-1"></div>
            <div className="cuadradom col-sm-1"></div>
            <div className="cuadradom col-sm-1"></div>
            
            </div>


            <div className="row">
            <div className="cuadrado col-sm-1">6</div>
            <div className="cuadradom col-sm-1"></div>
            <div className="cuadradom col-sm-1"></div>
            <div className="cuadradom col-sm-1"></div>
            <div className="cuadradom col-sm-1"></div>
            <div className="cuadradom col-sm-1"></div>
            <div className="cuadradom col-sm-1"></div>
            <div className="cuadradom col-sm-1"></div>
            <div className="cuadradom col-sm-1"></div>
            <div className="cuadradom col-sm-1"></div>
            
            </div>

            <div className="row">
            <div className="cuadrado col-sm-1">7</div>
            <div className="cuadradom col-sm-1"></div>
            <div className="cuadradom col-sm-1"></div>
            <div className="cuadradom col-sm-1"></div>
            <div className="cuadradom col-sm-1"></div>
            <div className="cuadradom col-sm-1"></div>
            <div className="cuadradom col-sm-1"></div>
            <div className="cuadradom col-sm-1"></div>
            <div className="cuadradom col-sm-1"></div>
            <div className="cuadradom col-sm-1"></div>
            
            </div>

            <div className="row">
            <div className="cuadrado col-sm-1">8</div>
            <div className="cuadradom col-sm-1"></div>
            <div className="cuadradom col-sm-1"></div>
            <div className="cuadradom col-sm-1"></div>
            <div className="cuadradom col-sm-1"></div>
            <div className="cuadradom col-sm-1"></div>
            <div className="cuadradom col-sm-1"></div>
            <div className="cuadradom col-sm-1"></div>
            <div className="cuadradom col-sm-1"></div>
            <div className="cuadradom col-sm-1"></div>
            
            </div>
            <div className="row">
            <div className="cuadrado col-sm-1">9</div>
            <div className="cuadradom col-sm-1"></div>
            <div className="cuadradom col-sm-1"></div>
            <div className="cuadradom col-sm-1"></div>
            <div className="cuadradom col-sm-1"></div>
            <div className="cuadradom col-sm-1"></div>
            <div className="cuadradom col-sm-1"></div>
            <div className="cuadradom col-sm-1"></div>
            <div className="cuadradom col-sm-1"></div>
            <div className="cuadradom col-sm-1"></div>
            
            </div>

       

         




        </div>
      </div>
      </header>
    </div>
  );
}

export default App;
