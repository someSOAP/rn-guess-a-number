import React, { FC } from 'react'
import { View, StyleSheet, Text } from 'react-native'

interface IGameOverScreenProps {
  prop?: any
}

export const GameOverScreen: FC<IGameOverScreenProps> = ({ children }) => {
  return (
    <View>
      <Text>The Game is Over</Text>
    </View>
  )
}

const styles = StyleSheet.create({})

export default GameOverScreen
