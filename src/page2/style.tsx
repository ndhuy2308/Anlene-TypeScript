import { StyleSheet } from 'react-native'
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue'
  },
  textTop: {
    textAlign: 'center',
    color: '#ffffff',
    fontFamily: 'svnGotham',
    fontSize: 14
  },
  textProgess: {
    color: 'white',
    fontFamily: 'svnGotham',
    fontSize: 14
  },
  imageProgess: {
    width: 30,
    height: 30,
    backgroundColor: '#73A442',
    borderRadius: 50
  },

  circleGradient: {
    margin: 2,
    backgroundColor: '#71A162',
    borderRadius: 5,
    padding: 5
  },
  shadow: {
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 40
    },
    shadowOpacity: 0.7,
    shadowRadius: 10,

    elevation: 11
  },
  modalView: {
    alignSelf: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
    width: '90%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  buttonContainer: {
    alignSelf: 'center',
    justifyContent: 'center',
    margin: 3,
    borderRadius: 24,
    width: '40%'
  },
  buttonText: {
    textAlign: 'center',
    alignSelf: 'center',
    fontFamily: 'svnGotham',
    fontSize: 18,
    paddingLeft: 22,
    paddingRight: 22,
    paddingTop: 4,
    paddingBottom: 4
  }
})

export default styles
