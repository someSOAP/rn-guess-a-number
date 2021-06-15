import React, { FC } from 'react'
import { View, StyleSheet, StatusBar } from 'react-native'
import { PRIMARY } from '@color'
import { BoldText } from '@components/BoldText'
interface IHeaderProps {
  text?: string
}

export const Header: FC<IHeaderProps> = ({ text }) => {
  return (
    <View style={styles.header}>
      <BoldText style={styles.headerTitle}>{text}</BoldText>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 90,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: PRIMARY,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    color: 'white',
    fontSize: 18,
  },
})

export default Header
