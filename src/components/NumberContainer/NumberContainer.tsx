import React, { FC } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { PRIMARY } from '@color'

interface INumberContainerProps {
  children: number
}

export const NumberContainer: FC<INumberContainerProps> = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: PRIMARY,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 25,
    color: PRIMARY,
  },
})

export default NumberContainer
