import React, { FC } from 'react'
import { View, StyleSheet, ViewStyle } from 'react-native'

interface ICardProps {
  style?: ViewStyle
}

export const Card: FC<ICardProps> = ({ children, style = {} }) => {
  return <View style={{ ...styles.card, ...style }}>{children}</View>
}

const styles = StyleSheet.create({
  card: {
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
    borderRadius: 10,
  },
})

export default Card
