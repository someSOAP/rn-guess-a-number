import React, { FC } from 'react'
import { StyleSheet, TextInput, TextInputProps } from 'react-native'

export const Input: FC<TextInputProps> = ({ style = {}, ...props }) => {
  const inputStyle = Object.assign({}, styles.input, style)

  return <TextInput {...props} style={inputStyle} />
}

const styles = StyleSheet.create({
  input: {
    height: 30,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    marginVertical: 10,
  },
})

export default Input
