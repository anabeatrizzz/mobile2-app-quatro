import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  viewHandleItens: {
    borderWidth: 2,
    borderRadius: 5,
    marginBottom: 20,
    padding: 3,
    flexDirection: 'row',
    borderColor: '#e6e600',
    backgroundColor: '#ffff99'
  },

  imageStyle: {
    width: 100,
    height: 100,
    marginRight: 10
  },

  title: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#ffbf00',
    textShadowColor: '#ffcc00',
    textShadowRadius: 10,
    textShadowOffset: {
      width: 2,
      height: 2
    }
  },

  descriptionView: {
    width: 240
  },
})

export default styles;