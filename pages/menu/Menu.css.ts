import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffb3",
  },

  content: {
    padding: 10,
  },

  firstTitleTxt: {
    marginTop: 150,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#ff6600',
    textShadowColor: '#ffb380',
    textShadowRadius: 5,
    textShadowOffset: {
      width: 3,
      height: 3
    }
  },

  secondTitleTxt: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: '#ff6600',
    textShadowColor: '#ffb380',
    textShadowRadius: 5,
    textShadowOffset: {
      width: 3,
      height: 3
    }
  },

  btn: {
    alignItems: "center",
    backgroundColor: "#ff6600",
    padding: 10,
    borderRadius: 5,
  },

  btnTxt: {
    color: '#fff0e6',
    fontWeight: 'bold'
  },

  subtotalTxt: {
    color: '#ff6600',
    textShadowColor: '#ffb380',
    textShadowRadius: 5,
    textShadowOffset: {
      width: 3,
      height: 3
    }
  },

  valueTxt: {
    color: '#ffbf00',
    textShadowColor: '#ffcc00',
    textShadowRadius: 5,
    textShadowOffset: {
      width: 3,
      height: 3
    }
  },

  subtotalTxtView: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold'
  }
})

export default styles;