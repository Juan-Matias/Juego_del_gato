import { Children, useState } from 'react'
import './App.css'

import confetti from 'canvas-confetti'
import {Square} from './components/Square.jsx'

import {TURNS} from './constanst.js'
import {checkWinnerFrom} from './logic/board.js'

function App() {
  // Crear un estado
  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(TURNS.X)
  const [winner, setWinner] = useState(null)

const resetGame = () =>{
  setBoard(Array(9).fill(null))
  setTurn(TURNS.X)
  setWinner(null)
}

const checkEndGame = (newBoard) => {
  return newBoard.every((square) => square !== null)
}

  
  const updateBoard = (index) =>{
    
    const newBoard = [...board]

    //no actualizamos esta posición
    //si ya tiene algo
    if(newBoard[index] || winner) return
    //actualizar el tablero
    newBoard[index] = turn
    //cambiar el turno
    setBoard(newBoard)
    
    const newTurn   = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    //revisar si hay un ganador
    const newWinner = checkWinnerFrom(newBoard)
    if(newWinner){
      confetti()
      setWinner(newWinner)
    } else if(checkEndGame(newBoard)){
      setWinner(false) // Empate
    }

  }

  return (
    <main className='board'>
      <h1>Juego del Gato :3</h1>
      <button onClick={resetGame}>Empezar de nuevo</button>
      <section className="game">
        {
          board.map((square, index) => {

            return (
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
                >

                {square}
              </Square>
            )
          })
        }
      </section>

      <section className="turn">
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>

      {
        winner !== null && (
          <section className="winner">
            <div className="text">
              <h2>
                {
                  winner === false
                  ? 'Empate'
                  : 'Ganó: ' 
                }
              </h2>
              <header className="win">
                {winner && <Square>{winner}</Square>}
              </header>
              <footer>
                <button onClick={resetGame}>
                  Empezar de nuevo
                </button>
              </footer>
            </div>
          </section>
        )
      }
    </main>
  )
}

export default App
