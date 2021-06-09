import React, { FC } from 'react'
import { View, StyleSheet, Image } from 'react-native'
import { CustomText } from '@components/CustomText'
import { CustomButton } from '@components/CustomButton'
import { Card } from '@components/Card'
import { NumberContainer } from '@components/NumberContainer'
import { PRIMARY } from '@color'

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
        <View style={styles.imageContainer}>
          <Image
            // fadeDuration={10000}
            // source={{
            //   uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png',
            // }}
            source={require('../../assets/game_over.png')}
            style={styles.image}
          />
        </View>

        <CustomText style={styles.textSecondary}>
          The number was {usersNumber}!
        </CustomText>
        <CustomText style={styles.textMain}>
          The <CustomText style={styles.primaryText}>Game</CustomText> is Over
          in
        </CustomText>
        <NumberContainer>{numberOfGuesses}</NumberContainer>
        <CustomText style={styles.textSecondary}>guesses!</CustomText>
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
  primaryText: {
    color: PRIMARY,
  },
  imageContainer: {
    alignSelf: 'stretch',
    borderRadius: 200,
    backgroundColor: PRIMARY,
    maxHeight: 200,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
})

export default GameOverScreen
