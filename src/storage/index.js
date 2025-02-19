export const saveGameToStorage = ({board, turn}) => {
    // guardar partida
    window.localStorage.setItem('board', JSON.stringify(newBoard))
    window.localStorage.setItem('turn', newTurn)
}

export const resetGameToStorage = () => {
    // eliminar partida
    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
}