import {WINNSER_COMBOS} from '../constanst'

export const checkWinnerFrom = (boardToCheck) => {
    for (const combo of WINNSER_COMBOS) {
      const [a, b, c] = combo;
      if (
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ) {
        return boardToCheck[a]; // Retorna el ganador (X o O)
      }
    }
    return null; // Si no hay ganador, retornamos null
  };
