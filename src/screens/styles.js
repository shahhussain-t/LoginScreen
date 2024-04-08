import { StyleSheet ,Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  passwordInputContainer: {
    position: 'relative',
    width: '100%',
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    marginTop: 5, 
    marginBottom:10,
    width: Dimensions.get('window').width * 0.90,
  },
});

export default styles;
