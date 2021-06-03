import React, { FC } from 'react'
import { View, StyleSheet } from 'react-native'

export const Card: FC = ({ children }) => {
  return <View style={styles.card}>{children}</View>
}

const styles = StyleSheet.create({
  card: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
    padding: 20,

    // for iOS
    shadowColor: 'black',
    shadowOffset: { width: 300, height: 3 },
    shadowOpacity: 0.26,
    shadowRadius: 6,
    // for Android
    elevation: 5,

    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
})

export default Card
