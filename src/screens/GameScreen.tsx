import React, { FC, useRef, useState, useEffect } from 'react'
import { partial } from 'lodash'
import { View, StyleSheet, Alert, ScrollView, FlatList } from 'react-native'
import { NumberContainer } from '@components/NumberContainer'
import { Card } from '@components/Card'
import { CustomButton } from '@components/CustomButton'
import { BoldText } from '@components/BoldText'
import { Ionicons } from '@expo/vector-icons'
import CustomText from '@components/CustomText'
import { PRIMARY, SECONDARY } from '@color'

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

  const initialGuess = generateRandomBetween(
    currentLow.current,
    currentHigh.current,
    userChoice
  )
  const [currentGuess, setCurrentGuess] = useState<number>(initialGuess)

  const [pastGuesses, setPastGuesses] = useState<number[]>([])

  useEffect(() => {
    if (currentGuess === userChoice) {
      onGameOver(pastGuesses.length + 1)
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
      currentLow.current = currentGuess + 1
    }

    const nextNumber = generateRandomBetween(
      currentLow.current,
      currentHigh.current,
      currentGuess
    )
    setCurrentGuess(nextNumber)
    setPastGuesses((prevState) => {
      return [nextNumber, ...prevState]
    })
  }

  const onLowerHandler = partial(nextGuessHandler, 'LOWER')
  const onGreaterHandler = partial(nextGuessHandler, 'GREATER')

  return (
    <View style={styles.screen}>
      <BoldText>Opponent`s guess: </BoldText>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <CustomButton onPress={onLowerHandler}>
          <Ionicons name="md-remove" color="white" /> LOWER
        </CustomButton>
        <CustomButton onPress={onGreaterHandler}>
          GREATER <Ionicons name="md-add" color="white" />
        </CustomButton>
      </Card>
      <View style={styles.scrollViewWrapper}>
        <FlatList
          data={pastGuesses}
          style={styles.scrollView}
          keyExtractor={(item) => String(item)}
          renderItem={({ item }) => (
            <View style={styles.pastGuess}>
              <CustomText style={styles.guessedItemText}>
                Guessed number:{' '}
                <BoldText style={styles.guessedNumber}>{item}</BoldText>
              </CustomText>
            </View>
          )}
        />
        {/*<ScrollView contentContainerStyle={styles.scrollView}>*/}
        {/*</ScrollView>*/}
      </View>
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
  scrollViewWrapper: {
    flex: 1,
  },
  scrollView: {
    flexGrow: 1,
  },
  pastGuess: {
    marginVertical: 5,
    padding: 46,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: PRIMARY,
  },
  guessedItemText: {
    fontSize: 20,
  },
  guessedNumber: {
    color: SECONDARY,
  },
})

export default GameScreen
