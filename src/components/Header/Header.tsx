import React, { FC } from 'react'
import { View, StyleSheet, Text } from 'react-native'

interface IHeaderProps {
  text?: string
}

export const Header: FC<IHeaderProps> = ({ text }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 90,
    paddingTop: 36,
    backgroundColor: '#f7287b',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    color: 'black',
    fontSize: 18,
  },
})

export default Header
