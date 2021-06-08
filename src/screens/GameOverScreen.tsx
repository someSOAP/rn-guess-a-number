import React, { FC } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { CustomButton } from '@components/CustomButton'
import { Card } from '@components/Card'
import { NumberContainer } from '@components/NumberContainer'

interface IGameOverScreenProps {
  numberOfGuesses: number
  onNewGame: () => void
}

export const GameOverScreen: FC<IGameOverScreenProps> = ({
  onNewGame,
  numberOfGuesses,
}) => {
  return (
    <View style={styles.screen}>
      <Card>
        <Text style={styles.textMain}>The Game is Over in </Text>
        <NumberContainer>{numberOfGuesses}</NumberContainer>
        <Text style={styles.textSecondary}>guesses!</Text>
        <CustomButton onPress={onNewGame}>Start New Game</CustomButton>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textMain: {
    fontSize: 25,
    paddingTop: 20,
  },
  textSecondary: {
    fontSize: 20,
    paddingBottom: 20,
  },
})

export default GameOverScreen
