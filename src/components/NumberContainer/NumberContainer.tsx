import React, { FC } from 'react'
import { View, StyleSheet } from 'react-native'
import { CustomText } from '@components/CustomText'
import { PRIMARY } from '@color'

interface INumberContainerProps {
  children: number
}

export const NumberContainer: FC<INumberContainerProps> = ({ children }) => {
  return (
    <View style={styles.container}>
      <CustomText style={styles.text}>{children}</CustomText>
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
