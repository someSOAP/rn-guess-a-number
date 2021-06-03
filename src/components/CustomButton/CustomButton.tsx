import React, { FC } from 'react'
import { StyleSheet, Text, TouchableOpacity, ViewStyle } from 'react-native'
import { PRIMARY } from '@color'
interface ICustomButtonProps {
  onPress?: () => void
  children?: string
  textColor?: string
  style?: ViewStyle
}

export const CustomButton: FC<ICustomButtonProps> = ({
  onPress,
  children,
  textColor = 'white',
  style = {},
}) => {
  const touchableStyle = Object.assign({}, styles.btn, style)

  return (
    <TouchableOpacity style={touchableStyle} onPress={onPress}>
      <Text style={{ ...styles.btnText, color: textColor }}>{children}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  btn: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: PRIMARY,
    borderRadius: 5,
  },
  btnText: {
    color: 'white',
  },
})

export default CustomButton
