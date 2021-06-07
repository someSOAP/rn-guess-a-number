import React, { FC, useRef, useState, useEffect } from 'react'
import { partial } from 'lodash'
import { View, StyleSheet, Text, Alert } from 'react-native'
import { NumberContainer } from '@components/NumberContainer'
import { Card } from '@components/Card'
import { CustomButton } from '@components/CustomButton'

interface IGameScreenProps {
  userChoice: number
  onGameOver: (numOfGuesses: number) => void
}

type GuessDirType = 'LOWER' | 'GREATER'

const generateRandomBetween = (
  min: number,
  max: number,
  exclude: number
): number => {
  min = Math.ceil(min)
  max = Math.floor(max)
  const rndMun = Math.floor(Math.random() * (max - min)) + min
  if (rndMun === exclude) {
    return generateRandomBetween(min, max, exclude)
  }
  return rndMun
}

export const GameScreen: FC<IGameScreenProps> = ({
  userChoice,
  onGameOver,
}) => {
  const currentLow = useRef(1)
  const currentHigh = useRef(100)
  const [rounds, setRounds] = useState(0)
  const [currentGuess, setCurrentGuess] = useState<number>(
    generateRandomBetween(currentLow.current, currentHigh.current, userChoice)
  )

  useEffect(() => {
    if (currentGuess === userChoice) {
      onGameOver(rounds)
    }
  }, [currentGuess])

  const nextGuessHandler = (direction: GuessDirType) => {
    const incorrectHint =
      (direction === 'GREATER' && currentGuess > userChoice) ||
      (direction === 'LOWER' && currentGuess < userChoice)

    if (incorrectHint) {
      Alert.alert('Don`t lie', 'You know that this is wrong', [
        { text: 'Sorry', style: 'cancel' },
      ])
      return
    }

    if (direction === 'LOWER') {
      currentHigh.current = currentGuess
    } else {
      currentLow.current = currentGuess
    }

    const nextNumber = generateRandomBetween(
      currentLow.current,
      currentHigh.current,
      currentGuess
    )
    setRounds((prev) => {
      return prev++
    })
    setCurrentGuess(nextNumber)
  }

  const onLowerHandler = partial(nextGuessHandler, 'LOWER')
  const onGreaterHandler = partial(nextGuessHandler, 'GREATER')

  return (
    <View style={styles.screen}>
      <Text>Opponent`s guess: </Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <CustomButton onPress={onLowerHandler}>LOWER</CustomButton>
        <CustomButton onPress={onGreaterHandler}>GREATER</CustomButton>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    width: 300,
    maxWidth: '80%',
  },
})

export default GameScreen
