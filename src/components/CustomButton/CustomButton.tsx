import React, { FC } from 'react'
import { StyleSheet, TouchableOpacity, ViewStyle } from 'react-native'
import { RegText } from '@components/RegText'
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
      <RegText style={{ ...styles.btnText, color: textColor }}>{children}</RegText>
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
