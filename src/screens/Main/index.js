import React, { useEffect, useState } from 'react'
import { View, Alert } from 'react-native'

import params from '../../utils/Params'
import {
  createMinedBoard,
  cloneBoard,
  openField,
  hadExplosion,
  wonGame,
  showMines,
  invertFlag,
  flagsUsed
} from '../../utils/Logic'

import { MineField } from '../../components/MineField'
import { Header } from '../../components/Header'
import { LevelSelection } from '../../screens/LevelSelection';

import { styles } from './styles';

export function Main() {
  const [board, setBoard] = useState([]);
  const [won, setWon] = useState(false);
  const [lost, setLost] = useState(false);
  const [showLevelSelection, setShowLevelSelection] = useState(false);

  function minesAmount() {
    const cols = params.getColumnsAmount()
    const rows = params.getRowsAmount()

    return Math.ceil(cols * rows * params.difficultLevel)
  }

  function createBoard() {
    const cols = params.getColumnsAmount()
    const rows = params.getRowsAmount()

    const minedBoard = createMinedBoard(rows, cols, minesAmount())

    setBoard(minedBoard)
  }

  function resetState() {
    createBoard();
    setWon(false);
    setLost(false);
    setShowLevelSelection(false);
  }

  useEffect(() => {
    createBoard();
  }, [])

  function onOpenField(row, column) {
    const boardCloned = cloneBoard(board)

    openField(boardCloned, row, column)

    const lost = hadExplosion(boardCloned)
    const won = wonGame(boardCloned)

    if (lost) {
      showMines(boardCloned)
      Alert.alert('Perdeu', 'Tente novamente!')
    }

    if (won) {
      Alert.alert('Parabéns', 'Você venceu')
    }

    setBoard(boardCloned)
    setLost(lost)
    setWon(won)
  }

  onSelectField = (row, column) => {
    const boardCloned = cloneBoard(board)
    invertFlag(boardCloned, row, column)
    const won = wonGame(boardCloned)

    if (won) {
      Alert.alert('Parabéns', 'Você venceu!')
    }

    setBoard(boardCloned);
    setWon(won)
  }

  onLevelSelected = level => {
    params.difficultLevel = level
    resetState();
  }

  return (
    <View style={styles.container}>
      <LevelSelection isVisible={showLevelSelection}
        onLevelSelected={onLevelSelected}
        onCancel={() => setShowLevelSelection(false)} />
      <Header flagsLeft={minesAmount() - flagsUsed(board)}
        onNewGame={resetState}
        onFlagPress={() => setShowLevelSelection(true)} />
      <View style={styles.board}>
        <MineField board={board}
          onOpenField={onOpenField}
          onSelectField={onSelectField} />
      </View>
    </View>
  )
}
