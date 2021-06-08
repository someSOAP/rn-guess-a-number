import React, { FC } from 'react'
import { View, StyleSheet } from 'react-native'
import { SECONDARY } from '@color'
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
    backgroundColor: SECONDARY,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    color: 'black',
    fontSize: 18,
  },
})

export default Header
