import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFF',
    padding: 20,
    height: '100%',
  },
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 216,
    backgroundColor: '#25CB5C',
  },
  signInButton: {
    marginVertical: 15,
    marginHorizontal: 16,
  },
  input: {
    marginTop: 12,
  },
  profileAvatar: {
    width: 116,
    height: 116,
    borderRadius: 58,
    alignSelf: 'center',
  },
});

export default styles;
