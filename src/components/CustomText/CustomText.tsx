import React, { FC } from 'react'
import { StyleSheet, Text, TextProps } from 'react-native'
import { OPEN_SANS } from '@constants/fonts'

export const CustomText: FC<TextProps> = ({
  children,
  style = {},
  ...props
}) => {
  const textStyle = Object.assign({}, styles.text, style)
  return (
    <Text {...props} style={textStyle}>
      {children}
    </Text>
  )
}

const styles = StyleSheet.create({
  text: {
    fontFamily: OPEN_SANS,
  },
})

export default CustomText
