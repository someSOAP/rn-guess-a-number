import React, { FC } from 'react'
import { StyleSheet, Text, TextProps } from 'react-native'
import { OPEN_SANS } from '@constants/fonts'

interface IBodyTextProps extends TextProps {
  children?: React.ReactText[] | string | number
}

export const RegText: FC<IBodyTextProps> = ({
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

export default RegText
