import React, { FC } from 'react'
import { View, StyleSheet } from 'react-native'

import { Header } from '@components/Header'
import { StartGameScreen } from '@screens/StartGameScreen'

const App: FC = () => {
  return (
    <View style={styles.screen}>
      <Header text="TEXT" />
      <StartGameScreen />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
})

export default App
