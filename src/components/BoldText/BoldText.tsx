import React, { FC } from 'react'
import { StyleSheet, Text, TextProps } from 'react-native'
import { OPEN_SANS_BOLD } from '@constants/fonts'
interface IBodyTextProps extends TextProps {
  children?: string | number
}

export const BoldText: FC<IBodyTextProps> = ({
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
    fontFamily: OPEN_SANS_BOLD,
  },
})

export default BoldText
