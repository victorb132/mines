import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize'

const styles = StyleSheet.create({
  container: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: '#EEE',
      alignItems: 'center',
      justifyContent: 'space-around',
      paddingTop: 20,
      paddingHorizontal: 20,
  },
  flagContainer: {
      flexDirection: 'row',
  },
  flagButton: {
      marginTop: 10,
      minWidth: 30,
  },
  flagsLeft: {
      fontSize: RFValue(30),
      fontWeight: 'bold',
      paddingTop: 5,
      marginLeft: 20,
  },
  button: {
      backgroundColor: '#999',
      padding: 5,
      borderRadius: 10
  },
  buttonLabel: {
      fontSize: RFValue(20),
      color: '#DDD',
      fontWeight: 'bold',
  },
})

export { styles }