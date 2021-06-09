import React, { FC } from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  TextStyle,
} from 'react-native'
import { CustomText } from '@components/CustomText'
import { PRIMARY } from '@color'

interface ICustomButtonProps extends TouchableOpacityProps {
  textStyle?: TextStyle
}

export const CustomButton: FC<ICustomButtonProps> = ({
  children,
  textStyle = {},
  ...props
}) => {
  const touchableStyle = Object.assign({}, styles.btn, props.style)
  const textStyles = Object.assign({}, styles.btnText, textStyle)

  return (
    <TouchableOpacity {...props} style={touchableStyle}>
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
