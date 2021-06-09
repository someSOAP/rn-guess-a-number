import React, { FC } from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
  TextStyle,
} from 'react-native'
import { CustomText } from '@components/CustomText'
import { PRIMARY } from '@color'
interface ICustomButtonProps {
  onPress?: () => void
  children?: string
  textStyle?: TextStyle
  style?: ViewStyle
}

export const CustomButton: FC<ICustomButtonProps> = ({
  onPress,
  children,
  textStyle = {},
  style = {},
}) => {
  const touchableStyle = Object.assign({}, styles.btn, style)
  const textStyles = Object.assign({}, styles.btnText, textStyle)

  return (
    <TouchableOpacity style={touchableStyle} onPress={onPress}>
      <CustomText style={textStyles}>{children}</CustomText>
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
