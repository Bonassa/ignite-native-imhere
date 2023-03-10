import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131016',
    padding: 24
  },
  eventName: {
    color: '#FDFCFE',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 48
  },
  eventDate: {
    color: '#6B6B6B',
    fontSize: 16
  },
  input: {
    flex: 1,
    marginRight: 8,
    height: 48,
    backgroundColor: '#1F1E25',
    borderRadius: 4,
    color: '#FDFCFE',
    padding: 16,
    fontSize: 16
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
    backgroundColor: '#31CF67'
  },
  form: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 32,
    marginBottom: 42,
  },
  listEmptyText: {
    color: '#FFF',
    fontSize: 14,
    textAlign: 'center'
  }
})