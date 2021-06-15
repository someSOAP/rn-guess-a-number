import React, { FC, useState } from 'react'
import { StyleSheet, SafeAreaView } from 'react-native'
import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading'
import { Header } from '@components/Header'
import { StartGameScreen } from '@screens/StartGameScreen'
import { GameScreen } from '@screens/GameScreen'
import { GameOverScreen } from '@screens/GameOverScreen'
import { OPEN_SANS, OPEN_SANS_BOLD } from '@constants/fonts'

const fetchFonts = () => {
  return Font.loadAsync({
    [OPEN_SANS]: require('./assets/fonts/OpenSans-Regular.ttf'),
    [OPEN_SANS_BOLD]: require('./assets/fonts/OpenSans-Bold.ttf'),
  })
}

const App: FC = () => {
  const [dataLoading, setDataLoaded] = useState<boolean>(false)
  const [userNumber, setUserNumber] = useState<number>(0)
  const [guessRounds, setGuessRounds] = useState(0)

  if (!dataLoading) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onError={console.error}
        onFinish={() => setDataLoaded(true)}
      />
    )
  }

  const startGameHandler = (selectedNumber: number) => {
    setGuessRounds(0)
    setUserNumber(selectedNumber)
  }

  const gameOverHandler = (numOfRounds: number) => {
    setGuessRounds(numOfRounds)
  }

  const startNewGameHandler = () => {
    setUserNumber(0)
    setGuessRounds(0)
  }

  let content = <StartGameScreen onStartGame={startGameHandler} />

  if (userNumber && guessRounds === 0) {
    content = (
      <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
    )
  }

  if (guessRounds > 0) {
    content = (
      <GameOverScreen
        usersNumber={userNumber}
        onNewGame={startNewGameHandler}
        numberOfGuesses={guessRounds}
      />
    )
  }

  return (
    <SafeAreaView style={styles.screen}>
      <Header text="Guess a number!" />
      {content}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
})

export default App
