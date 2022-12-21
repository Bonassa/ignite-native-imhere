import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: '#1F1E25',
    borderRadius: 4,
    alignItems: 'center',
    marginBottom: 8
  },
  name: {
    flex: 1,
    color: '#FFF',
    fontSize: 16,
    marginLeft: 16
  },
  buttonText: {
    color: '#FFF',
    fontSize: 24
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 48,
    height: 48,
    borderRadius: 4,
    backgroundColor: '#E23C44'
  },
});