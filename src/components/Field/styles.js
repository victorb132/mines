import { StyleSheet } from 'react-native'
import params from '../../utils/Params'

const styles = StyleSheet.create({
  field: {
      height: params.blockSize,
      width: params.blockSize,
      borderWidth: params.borderSize,
      borderRadius: params.borderRadius
  },
  regular: {
      backgroundColor: '#999',
      borderLeftColor: '#333',
      borderTopColor: '#333',
      borderRightColor: '#333',
      borderBottomColor: '#333'
  },
  opened: {
      backgroundColor: '#fff',
      borderColor: '#777',
      alignItems: 'center',
      justifyContent: 'center',
  },
  label: {
      fontWeight: 'bold',
      fontSize: params.fontSize,
  },
  exploded: {
      backgroundColor: 'red',
      borderColor: 'red'
  }
})

export { styles }