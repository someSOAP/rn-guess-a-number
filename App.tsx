import React, { FC, useState } from 'react'
import { View, StyleSheet } from 'react-native'

import { Header } from '@components/Header'
import { StartGameScreen } from '@screens/StartGameScreen'
import { GameScreen } from '@screens/GameScreen'
import { GameOverScreen } from '@screens/GameOverScreen'

const App: FC = () => {
  const [userNumber, setUserNumber] = useState<number>()
  const [guessRounds, setGuessRounds] = useState(0)

  const startGameHandler = (selectedNumber: number) => {
    setGuessRounds(0)
    setUserNumber(selectedNumber)
  }

  const gameOverHandler = (numOfRounds: number) => {
    setGuessRounds(numOfRounds)
  }

  let content = <StartGameScreen onStartGame={startGameHandler} />

  if (userNumber && guessRounds === 0) {
    content = (
      <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
    )
  }

  if (guessRounds > 0) {
    content = <GameOverScreen />
  }

  return (
    <View style={styles.screen}>
      <Header text="Guess a number!" />
      {content}
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
})

export default App
