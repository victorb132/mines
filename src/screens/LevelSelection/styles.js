import { StyleSheet } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'

const styles = StyleSheet.create({
  frame: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgba(0,0,0,0.6)',
  },
  container: {
      backgroundColor: '#EEE',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 15,
  },
  title: {
      fontSize: RFValue(30),
      fontWeight: 'bold',
  },
  button: {
      marginTop: 10,
      padding: 5,
      borderRadius: 10,
  },
  buttonLabel: {
      fontSize: RFValue(20),
      color: '#EEE',
      fontWeight: 'bold',
  },
  bgEasy: {
      backgroundColor: '#49b65d'
  },
  bgNormal: {
      backgroundColor: '#2765F7'
  },
  bgHard: {
      backgroundColor: '#F26337'
  },
})

export { styles }