import { StyleSheet, Platform } from 'react-native'
import { getBottomSpace } from 'react-native-iphone-x-helper'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  board: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    marginBottom: Platform.OS === 'ios' ?  getBottomSpace() + 5 : 5
  }
})

export { styles }