import React, { FC } from 'react'
import { View, StyleSheet } from 'react-native'
import { RegText } from '@components/RegText'
import { CustomButton } from '@components/CustomButton'
import { Card } from '@components/Card'
import { NumberContainer } from '@components/NumberContainer'

interface IGameOverScreenProps {
  numberOfGuesses: number
  usersNumber: number
  onNewGame: () => void
}

export const GameOverScreen: FC<IGameOverScreenProps> = ({
  onNewGame,
  numberOfGuesses,
  usersNumber,
}) => {
  return (
    <View style={styles.screen}>
      <Card>
        <RegText style={styles.textSecondary}>
          The number was {usersNumber}!
        </RegText>
        <RegText style={styles.textMain}>The Game is Over in </RegText>
        <NumberContainer>{numberOfGuesses}</NumberContainer>
        <RegText style={styles.textSecondary}>guesses!</RegText>
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
