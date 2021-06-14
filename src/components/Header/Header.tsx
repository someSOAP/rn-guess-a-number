import React, { FC } from 'react'
import { View, StyleSheet, Platform } from 'react-native'
import { PRIMARY, SECONDARY } from '@color'
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
    paddingTop: 36,
    backgroundColor: Platform.OS === 'ios' ? SECONDARY : PRIMARY,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    color: Platform.OS === 'ios' ? 'black' : 'white',
    fontSize: 18,
  },
})

export default Header
